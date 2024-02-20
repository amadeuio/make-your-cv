import { useState, createContext, Dispatch, SetStateAction } from "react";
import { HeaderObject, EducationObject, ExperienceObject } from "./types";
import { initialHeaderObject, initialEducationArray, initialExperienceArray } from "./initialData";

import FormSection from "./components/FormSection";
import CvSection from "./components/CvSection";
import ButtonSwitch from "./components/ButtonSwitch";

interface FormDataContext {
  headerObject: HeaderObject;
  setHeaderObject: Dispatch<SetStateAction<HeaderObject>>;
  educationArray: EducationObject[];
  setEducationArray: Dispatch<SetStateAction<EducationObject[]>>;
  experienceArray: ExperienceObject[];
  setExperienceArray: Dispatch<SetStateAction<ExperienceObject[]>>;
}

export const FormDataContext = createContext<FormDataContext | undefined>(undefined);

function App() {
  const [headerObject, setHeaderObject] = useState(initialHeaderObject);
  const [educationArray, setEducationArray] = useState(initialEducationArray);
  const [experienceArray, setExperienceArray] = useState(initialExperienceArray);
  const [isFormSectionOpen, setIsFormSectionOpen] = useState(false);

  const toggleFormSection = () => {
    setIsFormSectionOpen(!isFormSectionOpen);
  };

  return (
    <>
      {/* <div className="overlay"></div> */}
      <div className="app-container">
        <div className="navbar">
          <ButtonSwitch
            isFormSectionOpen={isFormSectionOpen}
            toggleFormSection={toggleFormSection}
          />
          <h1>Make Your CV 📃</h1>
        </div>

        <div className="main-content-container">
          <FormDataContext.Provider
            value={{
              headerObject,
              setHeaderObject,
              educationArray,
              setEducationArray,
              experienceArray,
              setExperienceArray,
            }}>
            <FormSection isFormSectionOpen={isFormSectionOpen} />
            <CvSection isFormSectionOpen={isFormSectionOpen} />
          </FormDataContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
