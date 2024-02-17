import { useContext, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormDataContext } from "../App";
import { UUID } from "../App";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Button from "./Button";
import ExpandLessIcon from "../icons/ExpandLessIcon";
import ExpandMoreIcon from "../icons/ExpandMoreIcon";

function EducationForms() {
  const { educationArray, setEducationArray } = useContext(FormDataContext)!;

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

  const onDragEnd = (result) => {
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
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="educationForms">
        {(provided) => (
          <div className="education-forms" {...provided.droppableProps} ref={provided.innerRef}>
            <div className="form-title">Education</div>

            {educationArray.map((data, index) => (
              <Draggable key={data.id} draggableId={data.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <form className="education-form">
                      <fieldset>
                        {/* Legend */}
                        <div className="legend-container" onClick={() => toggleDropdown(data.id)}>
                          <div className="legend-content">
                            <legend>Education</legend>
                            {!data.isOpen && data.qualification && (
                              <div className="legend-qualification-preview">
                                <span className="legend-dash">—</span>
                                {data.qualification}
                              </div>
                            )}
                          </div>
                          {data.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>

                        {/* Drop down menu */}
                        <div className={`dropdown-menu ${data.isOpen ? "open" : ""}`}>
                          <ul>
                            <li className="input-container">
                              <label htmlFor={`qualification_${data.id}`}>Qualification</label>
                              <input
                                type="text"
                                id={`qualification_${data.id}`}
                                name="qualification"
                                placeholder="Enter the qualification name"
                                value={data.qualification}
                                onChange={(e) => handleChange(data.id, e)}
                              />
                            </li>
                            <li className="input-container">
                              <label htmlFor={`school_${data.id}`}>School</label>
                              <input
                                type="text"
                                id={`school_${data.id}`}
                                name="school"
                                placeholder="Enter the school name"
                                value={data.school}
                                onChange={(e) => handleChange(data.id, e)}
                              />
                            </li>
                            <li className="input-container">
                              <label htmlFor={`location_${data.id}`}>Location</label>
                              <input
                                type="text"
                                id={`location_${data.id}`}
                                name="location"
                                placeholder="Enter the location"
                                value={data.location}
                                onChange={(e) => handleChange(data.id, e)}
                              />
                            </li>
                            <li className="input-container">
                              <label htmlFor={`startDate_${data.id}`}>Start Date</label>
                              <input
                                type="text"
                                id={`startDate_${data.id}`}
                                name="startDate"
                                placeholder="Enter the start date"
                                value={data.startDate}
                                onChange={(e) => handleChange(data.id, e)}
                              />
                            </li>
                            <li className="input-container">
                              <label htmlFor={`endDate_${data.id}`}>End Date</label>
                              <input
                                type="text"
                                id={`endDate_${data.id}`}
                                name="endDate"
                                placeholder="Enter the end date"
                                value={data.endDate}
                                onChange={(e) => handleChange(data.id, e)}
                              />
                            </li>
                          </ul>

                          <div className="button-container">
                            <button
                              className="delete-button"
                              onClick={(e) => handleDelete(data.id, e)}>
                              Delete
                            </button>
                            <button className="save-button" onClick={(e) => handleSave(data.id, e)}>
                              Save
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <Button className="add-new-button" label={"+ Add new"} onClick={handleAddNew} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default EducationForms;
