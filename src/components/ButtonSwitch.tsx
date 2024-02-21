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
          <ArrowRight /> Show CV
        </>
      ) : (
        <>
          <ArrowLeft /> Show Inputs
        </>
      )}
    </button>
  );
}

export default ButtonSwitch;
