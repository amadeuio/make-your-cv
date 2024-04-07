import { useFormDataContext } from "../../../Context";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import EducationForm from "./EducationForm";
import Button from "../../common/Button";

function EducationForms() {
  const { educationArray, setEducationArray } = useFormDataContext();

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
      <div className="forms-title">Education</div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="educationFormsContainer">
          {(provided) => (
            <div className="forms-container" {...provided.droppableProps} ref={provided.innerRef}>
              {/* Creates a form synced with each object */}
              {educationArray.map((educationObject, index) => (
                <Draggable key={educationObject.id} draggableId={educationObject.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <EducationForm educationObject={educationObject} />
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

export default EducationForms;
