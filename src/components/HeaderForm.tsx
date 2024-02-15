import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

function HeaderForm() {
  const { headerData, setHeaderData } = useContext(FormDataContext)!;
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeaderData({ ...headerData, [name]: value });
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHeaderData({ fullName: "", email: "", phone: "", address: "" });
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  const { fullName, email, phone, address } = headerData;

  return (
    <form className="header-form">
      <fieldset>
        {/* Legend */}
        <div className="legend-container" onClick={toggleDropdown}>
          <div className="legend-content">
            <legend>Header</legend>
            {!isOpen && fullName && (
              <div className="legend-fullname">
                <span className="legend-dash">—</span>
                {fullName}
              </div>
            )}
          </div>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>

        {/* Drop down menu */}
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="input-container">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={address}
                onChange={handleChange}
              />
            </li>
          </ul>
          <div className="button-container">
            <Button className="clear-button" label="Clear" onClick={handleClear} />
            <Button className="save-button" label="Save" onClick={handleSave} />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default HeaderForm;
