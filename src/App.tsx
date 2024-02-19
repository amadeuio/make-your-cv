import HeaderForm from "./components/HeaderForm";
import EducationForms from "./components/EducationForms";
import ExperienceForms from "./components/ExperienceForm";

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

interface ExperienceData {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

interface FormDataContext {
  headerObject: HeaderObject;
  setHeaderObject: React.Dispatch<React.SetStateAction<HeaderObject>>;
  educationArray: EducationObject[];
  setEducationArray: React.Dispatch<React.SetStateAction<EducationObject[]>>;
  experienceData: ExperienceData;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
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

const initialExperienceData: ExperienceData = {
  company: "Acme Corp",
  position: "Software Engineer",
  startDate: "Feb 2020",
  endDate: "Oct 2023",
  location: "Madrid, Spain",
  description: `- Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
- Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`,
};

function App() {
  const [headerObject, setHeaderObject] = useState(initialHeaderObject);
  const [educationArray, setEducationArray] = useState(initialEducationArray);
  const [experienceData, setExperienceData] = useState(initialExperienceData);

  return (
    <div className="app-container">
      <div className="main-content-container">
        <FormDataContext.Provider
          value={{
            headerObject,
            setHeaderObject,
            educationArray,
            setEducationArray,
            experienceData,
            setExperienceData,
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
