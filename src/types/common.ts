export interface ProfileData {
  name: string;
  birthDate: string;
  bloodType: string;
  currentTeams: {
    japan: string;
    canada: string;
  };
  position: string;
  birthPlace: string;
  height: string;
  weight: string;
  education: {
    middle: string;
    high: string;
    university: string;
  };
  achievements: {
    university: string[];
    professional: string[];
  };
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}