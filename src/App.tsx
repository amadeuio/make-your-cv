import HeaderForm from "./components/HeaderForm";
import EducationForms from "./components/EducationForms";
import ExperienceForms from "./components/ExperienceForms";

import HeaderCv from "./components/HeaderCv";
import EducationCv from "./components/EducationCv";
import ExperienceCv from "./components/ExperienceCv";

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

function Cv() {
  return (
    <div className="cv">
      <HeaderCv />
      <EducationCv />
      <ExperienceCv />
    </div>
  );
}

function CvSection() {
  return (
    <main className="cv-section">
      <Cv />
    </main>
  );
}

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
  address: "Breda, NL",
  isOpen: false,
};

const initialEducationArray: EducationObject[] = [
  {
    id: uuidv4(),
    school: "Cambridge",
    qualification: "Bachelor of Arts",
    startDate: "Jan 2013",
    endDate: "Jan 2017",
    location: "England",
    isOpen: false,
  },
  {
    id: uuidv4(),
    school: "UB",
    qualification: "Chemistry",
    startDate: "Oct 2000",
    endDate: "Nov 2005",
    location: "Spain",
    isOpen: false,
  },
];

const initialExperienceArray: ExperienceObject[] = [
  {
    id: uuidv4(),
    company: "Acme Corp",
    position: "Software Engineer",
    startDate: "Feb 2020",
    endDate: "Oct 2023",
    location: "Madrid, Spain",
    description: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`,
    isOpen: false,
  },
  {
    id: uuidv4(),
    company: "Tech Solutions Inc",
    position: "Data Scientist",
    startDate: "May 2021",
    endDate: "Present",
    location: "New York, USA",
    description: `- Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`,
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
