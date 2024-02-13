import { useEffect, useState } from "react";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import Button from "./Button";

interface headerData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const initialHeaderData: headerData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
};

function HeaderForm() {
  const [headerData, setHeaderData] = useState<headerData>(initialHeaderData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeaderData({ ...headerData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(headerData);
  };

  useEffect(() => {
    console.log(headerData);
  }, [headerData]); // Runs after every render when headerData changes

  const { fullName, email, phone, address } = headerData;

  return (
    <form className="header-form" onSubmit={handleSubmit}>
      <fieldset>
        <div className="legend-container">
          <legend>Header</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <Button className="clear-button" label="Clear" onClick={() => {}} />
          <Button className="save-button" label="Save" onClick={() => {}} />
        </div>
      </fieldset>
    </form>
  );
}

export default HeaderForm;
