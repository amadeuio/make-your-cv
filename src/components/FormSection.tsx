import HeaderForm from "./HeaderForm";
import EducationForms from "./EducationForms";
import ExperienceForms from "./ExperienceForms";

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
