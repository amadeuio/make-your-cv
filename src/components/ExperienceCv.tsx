import { useContext } from "react";
import { FormDataContext } from "../App";

import LocationIcon from "../icons/LocationIcon";

function ExperienceCv() {
  const { experienceData } = useContext(FormDataContext)!;
  const { company, position, startDate, endDate, location, description } = experienceData;

  const isExperienceDataEmpty = Object.values(experienceData).every((value) => value === "");

  if (isExperienceDataEmpty) {
    return null;
  }

  return (
    <div className="experience-container cv-container">
      <h1>Experience</h1>
      {Array(2)
        .fill(null)
        .map(() => (
          <div className="experience-item cv-item">
            <div className="experience-title cv-title">
              {company ? `${position}, ${company}` : position}
            </div>
            {location && (
              <div className="experience-location cv-location">
                <LocationIcon />
                {location}
              </div>
            )}
            <div className="experience-date cv-date">
              {startDate}
              {endDate && ` — ${endDate}`}
            </div>
            <ul className="experience-description cv-description">
              {description.split("\n").map((point, index) => (
                <li key={index}>{point.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default ExperienceCv;
