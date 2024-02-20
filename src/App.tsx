import { useState, createContext, Dispatch, SetStateAction } from "react";
import { HeaderObject, EducationObject, ExperienceObject } from "./types";
import { initialHeaderObject, initialEducationArray, initialExperienceArray } from "./initialData";

import FormSection from "./components/FormSection";
import CvSection from "./components/CvSection";

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

  return (
    <div className="app-container">
      <div className="navbar">
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
          <FormSection />
          <CvSection />
        </FormDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
