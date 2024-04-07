import HeaderForm from "./HeaderForm";
import EducationForms from "./EducationForms/EducationForms";
import ExperienceForms from "./ExperienceForms/ExperienceForms";

function FormSection() {
  return (
    <aside className="form-section">
      <HeaderForm />
      <EducationForms />
      <ExperienceForms />
    </aside>
  );
}

export default FormSection;
