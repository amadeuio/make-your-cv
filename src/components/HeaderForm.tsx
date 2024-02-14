import { useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";

function HeaderForm() {
  const { headerData, setHeaderData } = useContext(FormDataContext)!;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeaderData({ ...headerData, [name]: value });
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHeaderData({ fullName: "", email: "", phone: "", address: "" });
    console.log("Clear detected:", headerData);
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Save detected:", headerData);
  };

  const { fullName, email, phone, address } = headerData;

  return (
    <form className="header-form">
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
          <Button className="clear-button" label="Clear" onClick={handleClear} />
          <Button className="save-button" label="Save" onClick={handleSave} />
        </div>
      </fieldset>
    </form>
  );
}

export default HeaderForm;
