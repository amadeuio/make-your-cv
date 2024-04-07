import { ChangeEvent, FormEvent } from "react";
import { useFormDataContext } from "../../../Context";
import { EducationObject } from "../../../data/types";
import Button from "../../common/Button";
import ExpandLessIcon from "../../../icons/ExpandLessIcon";
import ExpandMoreIcon from "../../../icons/ExpandMoreIcon";

interface EducationFormProps {
  educationObject: EducationObject;
}

function EducationForm({ educationObject }: EducationFormProps) {
  const { id, school, qualification, startDate, endDate, location, isOpen } = educationObject;
  const { setEducationArray } = useFormDataContext();

  const toggleDropdown = () => {
    setEducationArray((prevState) =>
      prevState.map((edu) => (edu.id === id ? { ...edu, isOpen: !edu.isOpen } : edu))
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationArray((prevState) =>
      prevState.map((edu) => (edu.id === id ? { ...edu, [name]: value } : edu))
    );
  };

  const handleDelete = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEducationArray((prevState) => prevState.filter((edu) => edu.id !== id));
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  return (
    <form className="education-form">
      <fieldset>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </li>
          </ul>

          <div className="button-container">
            <Button className="delete-button" label={"Delete"} onClick={handleDelete} />
            <Button className="save-button" label={"Save"} onClick={handleSave} />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default EducationForm;
