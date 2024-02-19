import { useContext } from "react";
import { FormDataContext } from "../App";
import { EducationObject } from "../types";

import LocationIcon from "../icons/LocationIcon";

interface EducationItemProps {
  educationObject: EducationObject;
}

function EducationItem({ educationObject }: EducationItemProps) {
  const { id, qualification, school, location, startDate, endDate } = educationObject;

  return (
    <div className="education-item cv-item" key={id}>
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
  );
}

function EducationCv() {
  const { educationArray } = useContext(FormDataContext)!;

  if (educationArray.length === 0) {
    return null;
  }

  return (
    <div className="education-container cv-container">
      <h1>Education</h1>
      {educationArray.map((educationObject) => (
        <EducationItem key={educationObject.id} educationObject={educationObject} />
      ))}
    </div>
  );
}

export default EducationCv;
