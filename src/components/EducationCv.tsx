import { useContext } from "react";
import { FormDataContext } from "../App";

import LocationIcon from "../icons/LocationIcon";

import { EducationObject } from "../App";

function EducationCv() {
  const { educationArray } = useContext(FormDataContext)!;

  const isEducationEmpty = (edu: EducationObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, isOpen, ...otherProps } = edu;
    return Object.values(otherProps).every((value) => value === "" || value === null);
  };

  if (educationArray.every((edu) => isEducationEmpty(edu))) {
    return null;
  }

  return (
    <div className="education-container cv-container">
      <h1>Education</h1>
      {educationArray.map((edu) => (
        <div className="education-item cv-item" key={edu.id}>
          <div className="education-title cv-title">
            {edu.school ? `${edu.qualification}, ${edu.school}` : edu.qualification}
          </div>
          {edu.location && (
            <div className="education-location cv-location">
              <LocationIcon />
              {edu.location}
            </div>
          )}
          <div className="education-date cv-date">
            {edu.startDate}
            {edu.endDate && ` — ${edu.endDate}`}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationCv;
