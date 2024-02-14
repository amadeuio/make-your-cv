import { useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";

function EducationForm() {
  const { educationData, setEducationData } = useContext(FormDataContext)!;

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
    console.log("Clear detected:", educationData);
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Save detected", educationData);
  };

  const { school, qualification, startDate, endDate, location } = educationData;

  return (
    <form className="education-form">
      <fieldset>
        <div className="legend-container">
          <legend>Education</legend>
          <ExpandLessIcon />
        </div>
        <div className="input-container">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            placeholder="Enter the qualification name"
            value={qualification}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="Enter the school name"
            value={school}
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

        <div className="button-container">
          <Button className="clear-button" label="Clear" onClick={handleClear} />
          <Button className="save-button" label="Save" onClick={handleSave} />
        </div>
      </fieldset>
    </form>
  );
}

export default EducationForm;
