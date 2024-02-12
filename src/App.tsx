import HeaderForm from "./components/HeaderForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

import HeaderCv from "./components/HeaderCv";

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

function App() {
  return (
    <>
      <FormSection />
      <VerticalLine />
      <CvSection />
    </>
  );
}

export default App;
