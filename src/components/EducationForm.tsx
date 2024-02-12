import ExpandLessIcon from "../icons/ExpandLessIcon";
import Button from "./Button";

import { ChangeEvent, useState } from "react";

function EducationForm() {
  const [formData, setFormData] = useState({
    school: "",
    qualification: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="education-form">
      <fieldset>
        <div className="legend-container">
          <legend>Education</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
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

export default EducationForm;