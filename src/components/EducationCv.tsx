import { useContext } from "react";
import { FormDataContext } from "../App";

function EducationCv() {
  const { educationData } = useContext(FormDataContext)!;
  const { school, qualification, startDate, endDate, location } = educationData;

  return (
    <div className="education-cv">
      <div className="education-item">{school}</div>
      <div className="education-item">{qualification}</div>
      <div className="education-item">
        {startDate} - {endDate} ({location})
      </div>
    </div>
  );
}

export default EducationCv;
