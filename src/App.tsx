import HeaderForm from "./components/HeaderForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import HeaderCv from "./components/HeaderCv";
import { HeaderDataContext } from "./components/HeaderForm";

import { useState } from "react";
import { HeaderData } from "./components/HeaderForm";

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

function App() {
  const [headerData, setHeaderData] = useState<HeaderData>(initialHeaderData);

  return (
    <HeaderDataContext.Provider value={{ headerData, setHeaderData }}>
      <FormSection />
      <VerticalLine />
      <CvSection />
    </HeaderDataContext.Provider>
  );
}

export default App;
