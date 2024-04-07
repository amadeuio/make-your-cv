import { useFormDataContext } from "../../Context";
import { ExperienceObject } from "../../data/types";
import LocationIcon from "../../icons/LocationIcon";

interface ExperienceItemProps {
  experienceObject: ExperienceObject;
}

function ExperienceItem({ experienceObject }: ExperienceItemProps) {
  const { id, position, company, location, startDate, endDate, description } = experienceObject;

  return (
    <div className="experience-item cv-item" key={id}>
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
  );
}

function ExperienceCv() {
  const { experienceArray } = useFormDataContext();

  return (
    experienceArray.length && (
      <div className="experience-container cv-container">
        <h1>Experience</h1>
        {experienceArray.map((experienceObject) => (
          <ExperienceItem key={experienceObject.id} experienceObject={experienceObject} />
        ))}
      </div>
    )
  );
}

export default ExperienceCv;
