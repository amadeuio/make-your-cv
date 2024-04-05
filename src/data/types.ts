export type UUID = string;

export interface HeaderObject {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  isOpen: boolean;
}

export interface EducationObject {
  id: UUID;
  school: string;
  qualification: string;
  startDate: string;
  endDate: string;
  location: string;
  isOpen: boolean;
}

export interface ExperienceObject {
  id: UUID;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isOpen: boolean;
}
