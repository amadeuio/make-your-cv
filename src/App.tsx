import { useState, createContext } from "react";
import { HeaderObject, EducationObject, ExperienceObject } from "./types";
import { initialHeaderObject, initialEducationArray, initialExperienceArray } from "./initialData";

import HeaderForm from "./components/HeaderForm";
import EducationForms from "./components/EducationForms";
import ExperienceForms from "./components/ExperienceForms";
import CvSection from "./components/CvSection";

interface FormDataContext {
  headerObject: HeaderObject;
  setHeaderObject: React.Dispatch<React.SetStateAction<HeaderObject>>;
  educationArray: EducationObject[];
  setEducationArray: React.Dispatch<React.SetStateAction<EducationObject[]>>;
  experienceArray: ExperienceObject[];
  setExperienceArray: React.Dispatch<React.SetStateAction<ExperienceObject[]>>;
}

export const FormDataContext = createContext<FormDataContext | undefined>(undefined);

function App() {
  const [headerObject, setHeaderObject] = useState(initialHeaderObject);
  const [educationArray, setEducationArray] = useState(initialEducationArray);
  const [experienceArray, setExperienceArray] = useState(initialExperienceArray);

  return (
    <div className="app-container">
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
          <aside className="form-section">
            <HeaderForm />
            <EducationForms />
            <ExperienceForms />
          </aside>
          <div className="vertical-line"></div>
          <CvSection />
        </FormDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
