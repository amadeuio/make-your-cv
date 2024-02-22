import HeaderForm from "./HeaderForm";
import EducationForms from "./EducationForms";
import ExperienceForms from "./ExperienceForms";

interface FormSectionProps {
  showForm: boolean;
}

function FormSection({ showForm }: FormSectionProps) {
  return (
    <>
      <aside className={`form-section ${showForm ? "" : "open"}`}>
        <HeaderForm />
        <EducationForms />
        <ExperienceForms />
      </aside>
    </>
  );
}

export default FormSection;
