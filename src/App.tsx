import { useState, useEffect } from "react";

import FormSection from "./components/FormSection";
import CvSection from "./components/CvSection";
import ButtonToggleView from "./components/ButtonToggleView";
import { FormDataContextProvider } from "./Context";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 1250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleView = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app-container">
      <div className="navbar">
        {isCollapsed && <ButtonToggleView showForm={showForm} toggleView={toggleView} />}
        <h1>Make Your CV 📃</h1>
      </div>

      <FormDataContextProvider>
        <div className="main-content-container">
          {(!isCollapsed || showForm) && <FormSection />}
          {(!isCollapsed || !showForm) && <CvSection />}
        </div>
      </FormDataContextProvider>
    </div>
  );
}

export default App;
