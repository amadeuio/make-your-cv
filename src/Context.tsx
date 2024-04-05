import { useState, useContext, createContext, Dispatch, SetStateAction } from "react";
import { HeaderObject, EducationObject, ExperienceObject } from "./data/types";
import {
  initialHeaderObject,
  initialEducationArray,
  initialExperienceArray,
} from "./data/initialData";

interface FormDataContext {
  headerObject: HeaderObject;
  setHeaderObject: Dispatch<SetStateAction<HeaderObject>>;
  educationArray: EducationObject[];
  setEducationArray: Dispatch<SetStateAction<EducationObject[]>>;
  experienceArray: ExperienceObject[];
  setExperienceArray: Dispatch<SetStateAction<ExperienceObject[]>>;
}

export const FormDataContext = createContext<FormDataContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormDataContext = () => {
  return useContext(FormDataContext);
};

export const FormDataContextProvider = ({ children }) => {
  const [headerObject, setHeaderObject] = useState(initialHeaderObject);
  const [educationArray, setEducationArray] = useState(initialEducationArray);
  const [experienceArray, setExperienceArray] = useState(initialExperienceArray);

  return (
    <FormDataContext.Provider
      value={{
        headerObject,
        setHeaderObject,
        educationArray,
        setEducationArray,
        experienceArray,
        setExperienceArray,
      }}>
      {children}
    </FormDataContext.Provider>
  );
};
