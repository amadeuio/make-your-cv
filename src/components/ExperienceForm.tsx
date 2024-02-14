import { useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";

function ExperienceForm() {
  const { experienceData, setExperienceData } = useContext(FormDataContext)!;

  console.log(experienceData);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setExperienceData({ ...experienceData, [name]: value });
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExperienceData({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    console.log("Clear detected:", experienceData);
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Save detected", experienceData);
  };

  const { company, position, startDate, endDate, location, description } = experienceData;

  return (
    <form className="experience-form">
      <fieldset>
        <div className="legend-container">
          <legend>Experience</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Enter the position"
            value={position}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter the company name"
            value={company}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter the location"
            value={location}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            placeholder="Enter the start date"
            value={startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            placeholder="Enter the end date"
            value={endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a description"
            value={description}
            onChange={handleChange}></textarea>
        </div>
        <div className="button-container">
          <Button className="clear-button" label="Clear" onClick={handleClear} />
          <Button className="save-button" label="Save" onClick={handleSave} />
        </div>
      </fieldset>
    </form>
  );
}

export default ExperienceForm;
