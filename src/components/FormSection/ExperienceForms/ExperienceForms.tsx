import { useFormDataContext } from "../../../Context";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import ExperienceForm from "./ExperienceForm";
import Button from "../../common/Button";

function ExperienceForms() {
  const { experienceArray, setExperienceArray } = useFormDataContext();

  const handleAddNew = () => {
    const newEducationEntry = {
      id: uuidv4(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      isOpen: true,
    };

    setExperienceArray((prevState) => [...prevState, newEducationEntry]);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const updatedArray = Array.from(experienceArray);
    const [removed] = updatedArray.splice(startIndex, 1);
    updatedArray.splice(endIndex, 0, removed);

    setExperienceArray(updatedArray);
  };

  return (
    <>
      <div className="forms-title">Experience</div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="experienceFormsContainer">
          {(provided) => (
            <div className="forms-container" {...provided.droppableProps} ref={provided.innerRef}>
              {experienceArray.map((experienceObject, index) => (
                <Draggable
                  key={experienceObject.id}
                  draggableId={experienceObject.id}
                  index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <ExperienceForm experienceObject={experienceObject} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button className="forms-add-new" label={"+ Add new"} onClick={handleAddNew} />
    </>
  );
}

export default ExperienceForms;
