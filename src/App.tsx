import HeaderForm from "./components/HeaderForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import HeaderCv from "./components/HeaderCv";

import { useState, createContext } from "react";

interface HeaderData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

interface EducationData {
  school: string;
  qualification: string;
  startDate: string;
  endDate: string;
  location: string;
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
  headerData: HeaderData;
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderData>>;
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
  experienceData: ExperienceData;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData>>;
}

export const FormDataContext = createContext<FormDataContext | undefined>(undefined);

function Cv() {
  return (
    <div className="cv">
      <HeaderCv />
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
      <EducationForm />
      <ExperienceForm />
    </aside>
  );
}

function VerticalLine() {
  return <div className="vertical-line"></div>;
}

const initialHeaderData: HeaderData = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  phone: "+31 459 789 385",
  address: "Breda, NL",
};

const initialEducationData = {
  school: "Cambridge",
  qualification: "Bachelor of Arts",
  startDate: "Jan 2013",
  endDate: "Jan 2017",
  location: "England",
};

const initialExperienceData = {
  company: "Acme Corp",
  position: "Software Engineer",
  startDate: "Feb 2020",
  endDate: "Oct 2023",
  location: "Madrid, Spain",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod euismod quam, quis dignissim nulla tristique at. Morbi laoreet elit vel magna tincidunt, ac gravida lorem hendrerit.",
};

function App() {
  const [headerData, setHeaderData] = useState(initialHeaderData);
  const [educationData, setEducationData] = useState(initialEducationData);
  const [experienceData, setExperienceData] = useState(initialExperienceData);

  return (
    <FormDataContext.Provider
      value={{
        headerData,
        setHeaderData,
        educationData,
        setEducationData,
        experienceData,
        setExperienceData,
      }}>
      <FormSection />
      <VerticalLine />
      <CvSection />
    </FormDataContext.Provider>
  );
}

export default App;
