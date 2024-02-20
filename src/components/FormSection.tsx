import HeaderForm from "./HeaderForm";
import EducationForms from "./EducationForms";
import ExperienceForms from "./ExperienceForms";

interface FormSectionProps {
  isFormSectionOpen: boolean;
}

function FormSection({ isFormSectionOpen }: FormSectionProps) {
  return (
    <>
      <aside className={`form-section ${isFormSectionOpen ? "open" : ""}`}>
        <HeaderForm />
        <EducationForms />
        <ExperienceForms />
      </aside>
    </>
  );
}

export default FormSection;
