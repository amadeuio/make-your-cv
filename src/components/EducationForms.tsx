import { useContext, ChangeEvent, FormEvent } from "react";
import { EducationObject, FormDataContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import { UUID } from "../App";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

interface EducationFormProps {
  id: UUID;
}

function EducationForm({ id }: EducationFormProps) {
  const { educationArray, setEducationArray } = useContext(FormDataContext)!;

  const educationObject = educationArray.find((edu) => edu.id === id) as EducationObject;

  const { school, qualification, startDate, endDate, location, isOpen } = educationObject;

  const toggleDropdown = (id: UUID) => {
    setEducationArray((prevState) =>
      prevState.map((edu) => (edu.id === id ? { ...edu, isOpen: !edu.isOpen } : edu))
    );
  };

  const handleChange = (id: UUID, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationArray((prevState) =>
      prevState.map((edu) => (edu.id === id ? { ...edu, [name]: value } : edu))
    );
  };

  const handleDelete = (id: UUID, e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEducationArray((prevState) => prevState.filter((edu) => edu.id !== id));
  };

  const handleSave = (id: UUID, e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDropdown(id);
  };

  return (
    <form className="education-form">
      <fieldset>
        <div className="legend-container" onClick={() => toggleDropdown(id)}>
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
                onChange={(e) => handleChange(id, e)}
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
                onChange={(e) => handleChange(id, e)}
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
                onChange={(e) => handleChange(id, e)}
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
                onChange={(e) => handleChange(id, e)}
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
                onChange={(e) => handleChange(id, e)}
              />
            </li>
          </ul>

          <div className="button-container">
            <Button
              className="delete-button"
              label={"Delete"}
              onClick={(e) => handleDelete(id, e)}
            />
            <Button className="save-button" label={"Save"} onClick={(e) => handleSave(id, e)} />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

function EducationForms() {
  const { educationArray, setEducationArray } = useContext(FormDataContext)!;

  const handleAddNew = () => {
    const newEducationEntry = {
      id: uuidv4(),
      school: "",
      qualification: "",
      startDate: "",
      endDate: "",
      location: "",
      isOpen: true,
    };

    setEducationArray((prevState) => [...prevState, newEducationEntry]);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const updatedArray = Array.from(educationArray);
    const [removed] = updatedArray.splice(startIndex, 1);
    updatedArray.splice(endIndex, 0, removed);

    setEducationArray(updatedArray);
  };

  return (
    <>
      <div className="form-title">Education</div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="educationFormsContainer">
          {(provided) => (
            <div
              className="education-forms-container"
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {/* Creates a form synced with each object */}
              {educationArray.map((educationObject, index) => (
                <Draggable key={educationObject.id} draggableId={educationObject.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <EducationForm id={educationObject.id} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button className="add-new-button" label={"+ Add new"} onClick={handleAddNew} />
    </>
  );
}

export default EducationForms;
