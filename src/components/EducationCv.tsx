import { useContext } from "react";
import { FormDataContext } from "../App";

import LocationIcon from "../icons/LocationIcon";

function EducationCv() {
  const { educationData } = useContext(FormDataContext)!;
  const { school, qualification, startDate, endDate, location } = educationData;

  return (
    <div className="education-container">
      <h1>Education</h1>
      {Array(2)
        .fill(null)
        .map(() => (
          <div className="education-item">
            <div className="education-title">
              {qualification}, {school}
            </div>
            <div className="education-location">
              <LocationIcon />
              {location}
            </div>
            <div className="education-date">
              {startDate} — {endDate}
            </div>
          </div>
        ))}
    </div>
  );
}

export default EducationCv;
