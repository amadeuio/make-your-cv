import React, { ChangeEvent, useState } from "react";
import Button from "./Button"; // Import Button component
import ExpandLessIcon from "../icons/ExpandLessIcon";

function ExperienceForm() {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", experience);
  };

  return (
    <form className="experience-form" onSubmit={handleSubmit}>
      <fieldset>
        <div className="legend-container">
          <legend>Experience</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={experience.company}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={experience.position}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={experience.location}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={experience.description}
            onChange={handleChange}></textarea>
        </div>
        <div className="button-container">
          <Button className="clear-button" label="Clear" onClick={() => {}} />
          <Button className="save-button" label="Save" onClick={() => {}} />
        </div>
      </fieldset>
    </form>
  );
}

export default ExperienceForm;
