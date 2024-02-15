import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

function EducationForm() {
  const { educationData, setEducationData } = useContext(FormDataContext)!;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationData({ ...educationData, [name]: value });
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEducationData({
      school: "",
      qualification: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  const { school, qualification, startDate, endDate, location } = educationData;

  return (
    <form className="education-form">
      <fieldset>
        {/* Legend */}
        <div className="legend-container" onClick={toggleDropdown}>
          <div className="legend-content">
            <legend>Education</legend>
            {!isOpen && qualification && (
              <div className="legend-qualification-preview">
                <span className="legend-dash">—</span>
                {qualification}
              </div>
            )}
          </div>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>

        {/* Drop down menu */}
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="input-container">
              <label htmlFor="qualification">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                placeholder="Enter the qualification name"
                value={qualification}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                name="school"
                placeholder="Enter the school name"
                value={school}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter the location"
                value={location}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="text"
                id="startDate"
                name="startDate"
                placeholder="Enter the start date"
                value={startDate}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="endDate">End Date</label>
              <input
                type="text"
                id="endDate"
                name="endDate"
                placeholder="Enter the end date"
                value={endDate}
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

export default EducationForm;
