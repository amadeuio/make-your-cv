import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

interface ButtonToggleViewProps {
  showForm: boolean;
  toggleView: () => void;
}

function ButtonToggleView({ showForm, toggleView }: ButtonToggleViewProps) {
  return (
    <button className="toggle-view-button" onClick={toggleView}>
      {showForm ? (
        <>
          <ArrowRight /> Show CV
        </>
      ) : (
        <>
          <ArrowLeft /> Show Editor
        </>
      )}
    </button>
  );
}

export default ButtonToggleView;
