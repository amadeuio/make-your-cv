import { v4 as uuidv4 } from "uuid";
import { HeaderObject, EducationObject, ExperienceObject } from "./types";

export const initialHeaderObject: HeaderObject = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  phone: "+31 459 789 385",
  address: "Breda, Netherlands",
  isOpen: true,
};

export const initialEducationArray: EducationObject[] = [
  {
    id: uuidv4(),
    school: "University of Barcelona",
    qualification: "Bachelor of Science in Physics",
    startDate: "Sept 2016",
    endDate: "June 2021",
    location: "Barcelona, Spain",
    isOpen: false,
  },
  {
    id: uuidv4(),
    school: "Central High School",
    qualification: "High School Diploma",
    startDate: "Sept 2012",
    endDate: "June 2016",
    location: "Boston, USA",
    isOpen: false,
  },
];

export const initialExperienceArray: ExperienceObject[] = [
  {
    id: uuidv4(),
    company: "Acme Corporation",
    position: "Software Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Madrid, Spain",
    description: `- Worked as a Software Engineer in a dynamic team environment, 
implementing innovative solutions for various projects. 
- Collaborated with cross-functional teams to deliver high-quality software products. 
- Participated in code reviews and provided constructive feedback.`,
    isOpen: false,
  },
  {
    id: uuidv4(),
    company: "Tech Solutions Inc",
    position: "Data Scientist",
    startDate: "Sept 2021",
    endDate: "Aug 2022",
    location: "New York City, USA",
    description: `- Responsible for analyzing large datasets to extract actionable insights 
and improve business processes. 
- Developed machine learning models to predict customer behavior and optimize marketing strategies. 
- Presented findings to stakeholders and provided recommendations for future initiatives.`,
    isOpen: false,
  },
];
