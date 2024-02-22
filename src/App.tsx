import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import { HeaderObject, EducationObject, ExperienceObject } from "./types";
import { initialHeaderObject, initialEducationArray, initialExperienceArray } from "./initialData";

import FormSection from "./components/FormSection";
import CvSection from "./components/CvSection";
import ButtonToggleView from "./components/ButtonToggleView";

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

  const [showForm, setShowForm] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 1250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleView = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-container">
      <div className="navbar">
        {isCollapsed && <ButtonToggleView showForm={showForm} toggleView={toggleView} />}
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
          {(!isCollapsed || showForm) && <FormSection showForm={showForm} />}
          {(!isCollapsed || !showForm) && <CvSection showForm={showForm} />}
        </FormDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
