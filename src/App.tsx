import HeaderForm from "./components/HeaderForm";
import EducationForms from "./components/EducationForms";
import ExperienceForms from "./components/ExperienceForms";

import CvSection from "./components/CvSection";

import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export type UUID = string;

interface HeaderObject {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  isOpen: boolean;
}

export interface EducationObject {
  id: UUID;
  school: string;
  qualification: string;
  startDate: string;
  endDate: string;
  location: string;
  isOpen: boolean;
}

export interface ExperienceObject {
  id: UUID;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isOpen: boolean;
}

interface FormDataContext {
  headerObject: HeaderObject;
  setHeaderObject: React.Dispatch<React.SetStateAction<HeaderObject>>;
  educationArray: EducationObject[];
  setEducationArray: React.Dispatch<React.SetStateAction<EducationObject[]>>;
  experienceArray: ExperienceObject[];
  setExperienceArray: React.Dispatch<React.SetStateAction<ExperienceObject[]>>;
}

export const FormDataContext = createContext<FormDataContext | undefined>(undefined);

/* function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">CV Generator</h1>
    </nav>
  );
} */

function FormSection() {
  return (
    <aside className="form-section">
      <HeaderForm />
      <EducationForms />
      <ExperienceForms />
    </aside>
  );
}

function VerticalLine() {
  return <div className="vertical-line"></div>;
}

const initialHeaderObject: HeaderObject = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  phone: "+31 459 789 385",
  address: "Breda, Netherlands",
  isOpen: false,
};

const initialEducationArray: EducationObject[] = [
  {
    id: uuidv4(),
    school: "University of Barcelona",
    qualification: "Bachelor of Science in Physics",
    startDate: "Sept 2016",
    endDate: "June 2021",
    location: "Barcelona, Spain",
    isOpen: false,
  },
];

const initialExperienceArray: ExperienceObject[] = [
  {
    id: uuidv4(),
    company: "Acme Corporation",
    position: "Software Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Madrid, Spain",
    description: `- Worked as a Software Engineer in a dynamic team environment, 
implementing innovative solutions for various projects. 
- Collaborated with cross-functional teams to deliver high-quality software products. 
- Participated in code reviews and provided constructive feedback.`,
    isOpen: false,
  },
  {
    id: uuidv4(),
    company: "Tech Solutions Inc",
    position: "Data Scientist",
    startDate: "Sept 2021",
    endDate: "Aug 2022",
    location: "New York City, USA",
    description: `- Responsible for analyzing large datasets to extract actionable insights 
and improve business processes. 
- Developed machine learning models to predict customer behavior and optimize marketing strategies. 
- Presented findings to stakeholders and provided recommendations for future initiatives.`,
    isOpen: false,
  },
];

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
          <FormSection />
          <VerticalLine />
          <CvSection />
        </FormDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
