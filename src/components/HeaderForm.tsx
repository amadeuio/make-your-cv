import { createContext, useContext } from "react";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import Button from "./Button";

export interface HeaderData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

interface HeaderDataContextType {
  headerData: HeaderData;
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderData>>;
}

export const HeaderDataContext = createContext<HeaderDataContextType | undefined>(undefined);

function HeaderForm() {
  const { headerData, setHeaderData } = useContext(HeaderDataContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeaderData({ ...headerData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(headerData);
  };

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
