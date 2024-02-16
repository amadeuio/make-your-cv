import { useContext, ChangeEvent, FormEvent } from "react";
import { FormDataContext } from "../App";
import { UUID } from "../App";

import { EducationObject } from "../App";

import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

interface EducationFormProps {
  id: UUID;
}

function EducationForm({ id }: EducationFormProps) {
  const { educationArray, setEducationArray } = useContext(FormDataContext)!;

  const educationObject = educationArray.find((obj) => obj.id === id) as EducationObject;

  const { school, qualification, startDate, endDate, location, isOpen } = educationObject;

  const toggleDropdown = () => {
    setEducationArray((prevState) =>
      prevState.map((edu) =>
        edu.id === educationObject.id ? { ...edu, isOpen: !edu.isOpen } : edu
      )
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationArray((prevState) =>
      prevState.map((edu) => (edu.id === educationObject.id ? { ...edu, [name]: value } : edu))
    );
  };

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEducationArray((prevState) =>
      prevState.map((edu) =>
        edu.id === educationObject.id
          ? {
              ...edu,
              school: "",
              qualification: "",
              startDate: "",
              endDate: "",
              location: "",
              isOpen: true,
            }
          : edu
      )
    );
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

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
              <label htmlFor={`qualification_${id}`}>Qualification</label>
              <input
                type="text"
                id={`qualification_${id}`}
                name="qualification"
                placeholder="Enter the qualification name"
                value={qualification}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <li className="input-container">
              <label htmlFor={`school_${id}`}>School</label>
              <input
                type="text"
                id={`school_${id}`}
                name="school"
                placeholder="Enter the school name"
                value={school}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <li className="input-container">
              <label htmlFor={`location_${id}`}>Location</label>
              <input
                type="text"
                id={`location_${id}`}
                name="location"
                placeholder="Enter the location"
                value={location}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <li className="input-container">
              <label htmlFor={`startDate_${id}`}>Start Date</label>
              <input
                type="text"
                id={`startDate_${id}`}
                name="startDate"
                placeholder="Enter the start date"
                value={startDate}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <li className="input-container">
              <label htmlFor={`endDate_${id}`}>End Date</label>
              <input
                type="text"
                id={`endDate_${id}`}
                name="endDate"
                placeholder="Enter the end date"
                value={endDate}
                onChange={(e) => handleChange(e)}
              />
            </li>
          </ul>

          <div className="button-container">
            <button className="clear-button" onClick={(e) => handleClear(e)}>
              Clear
            </button>
            <button className="save-button" onClick={(e) => handleSave(e)}>
              Save
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default EducationForm;
