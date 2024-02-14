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

interface FormDataContext {
  headerData: HeaderData;
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderData>>;
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
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

// Default header data
const initialHeaderData: HeaderData = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  phone: "+31 459 789 385",
  address: "Breda, NL",
};

const initialEducationData = {
  school: "",
  qualification: "",
  startDate: "",
  endDate: "",
  location: "",
};

function App() {
  const [headerData, setHeaderData] = useState(initialHeaderData);
  const [educationData, setEducationData] = useState(initialEducationData);

  return (
    <FormDataContext.Provider
      value={{ headerData, setHeaderData, educationData, setEducationData }}>
      <FormSection />
      <VerticalLine />
      <CvSection />
    </FormDataContext.Provider>
  );
}

export default App;
