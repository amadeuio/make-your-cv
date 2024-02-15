import { useContext } from "react";
import { FormDataContext } from "../App";

import LocationIcon from "../icons/LocationIcon";

function EducationCv() {
  const { educationData } = useContext(FormDataContext)!;
  const { school, qualification, startDate, endDate, location } = educationData;

  const isEducationDataEmpty = Object.values(educationData).every((value) => value === "");

  if (isEducationDataEmpty) {
    return null;
  }

  return (
    <div className="education-container cv-container">
      <h1>Education</h1>
      {Array(2)
        .fill(null)
        .map(() => (
          <div className="education-item cv-item">
            <div className="education-title cv-title">
              {school ? `${qualification}, ${school}` : qualification}
            </div>
            {location && (
              <div className="education-location cv-location">
                <LocationIcon />
                {location}
              </div>
            )}
            <div className="education-date cv-date">
              {startDate}
              {endDate && ` — ${endDate}`}
            </div>
          </div>
        ))}
    </div>
  );
}

export default EducationCv;
