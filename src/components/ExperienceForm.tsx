import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import { ExperienceObject } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

interface ExperienceFormProps {
  experienceObject: ExperienceObject;
  setExperienceArray: React.Dispatch<React.SetStateAction<ExperienceObject[]>>;
}

function ExperienceForm({ experienceObject, setExperienceArray }: ExperienceFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { company, position, startDate, endDate, location, description } = experienceObject;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    //const { name, value } = e.target;
    return e.target;
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  return (
    <form>
      <fieldset>
        {/* Legend */}
        <div className="legend-container" onClick={toggleDropdown}>
          <div className="legend-content">
            <legend>Experience</legend>
            {!isOpen && company && (
              <div className="legend-company-preview">
                <span className="legend-dash">—</span>
                {company}
              </div>
            )}
          </div>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>

        {/* Drop down menu */}
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="input-container">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Enter the position"
                value={position}
                onChange={handleChange}
              />
            </li>
            <li className="input-container">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter the company name"
                value={company}
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
            <li className="input-container">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter a description"
                value={description}
                onChange={handleChange}></textarea>
            </li>
            <div className="button-container">
              <Button className="clear-button" label="Clear" onClick={handleClear} />
              <Button className="save-button" label="Save" onClick={handleSave} />
            </div>
          </ul>
        </div>
      </fieldset>
    </form>
  );
}

function ExperienceForms() {
  const { experienceArray, setExperienceArray } = useContext(FormDataContext)!;

  return (
    <>
      <div className="forms-title">Experience</div>
      <div className="forms-container">
        {experienceArray.map((experienceObject, index) => (
          <ExperienceForm
            key={index}
            experienceObject={experienceObject}
            setExperienceArray={setExperienceArray}
          />
        ))}
      </div>
      <Button className="forms-add-new" label={"+ Add new"} onClick={() => {}} />
    </>
  );
}

export default ExperienceForms;
