import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

interface ButtonSwitchProps {
  isFormSectionOpen: boolean;
  toggleFormSection: () => void;
}

function ButtonSwitch({ isFormSectionOpen, toggleFormSection }: ButtonSwitchProps) {
  return (
    <button className="switch-button" onClick={toggleFormSection}>
      {isFormSectionOpen ? (
        <>
          <ArrowRight /> Switch View
        </>
      ) : (
        <>
          <ArrowLeft /> Switch View
        </>
      )}
    </button>
  );
}

export default ButtonSwitch;
