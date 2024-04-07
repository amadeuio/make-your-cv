import { ChangeEvent, FormEvent } from "react";
import { useFormDataContext } from "../../../Context";
import { ExperienceObject } from "../../../data/types";
import Button from "../../common/Button";
import ExpandLessIcon from "../../../icons/ExpandLessIcon";
import ExpandMoreIcon from "../../../icons/ExpandMoreIcon";

interface ExperienceFormProps {
  experienceObject: ExperienceObject;
}

function ExperienceForm({ experienceObject }: ExperienceFormProps) {
  const { id, company, position, startDate, endDate, location, description, isOpen } =
    experienceObject;
  const { setExperienceArray } = useFormDataContext();

  const toggleDropdown = () => {
    setExperienceArray((prevState) =>
      prevState.map((exp) => (exp.id === id ? { ...exp, isOpen: !exp.isOpen } : exp))
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setExperienceArray((prevState) =>
      prevState.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp))
    );
  };

  const handleDelete = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExperienceArray((prevState) => prevState.filter((exp) => exp.id !== id));
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown();
  };

  return (
    <form className="experience-form">
      <fieldset>
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
          </ul>

          <div className="button-container">
            <Button className="clear-button" label={"Delete"} onClick={handleDelete} />
            <Button className="save-button" label={"Save"} onClick={handleSave} />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default ExperienceForm;
