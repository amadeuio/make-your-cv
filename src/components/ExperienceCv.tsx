import { useContext } from "react";
import { FormDataContext } from "../App";

import LocationIcon from "../icons/LocationIcon";

function ExperienceCv() {
  const { experienceData } = useContext(FormDataContext)!;
  const { company, position, startDate, endDate, location, description } = experienceData;

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      {Array(2)
        .fill(null)
        .map(() => (
          <div className="experience-item">
            <div className="experience-title">
              {position}, {company}
            </div>
            <div className="experience-location">
              <LocationIcon />
              {location}
            </div>
            <div className="experience-date">
              {startDate} — {endDate}
            </div>
            <div className="experience-description">{description}</div>
          </div>
        ))}
    </div>
  );
}

export default ExperienceCv;
