import type { IconType } from "react-icons";

export interface AboutDataType {
  titleFr: string;
  titleEn: string;
  aboutTxtFr: string;
  aboutTxtEn: string;
  skillOneFr: string;
  skillOneEn: string;
  skillTwoFr: string;
  skillTwoEn: string;
  skillThreeFr: string;
  skillThreeEn: string;
}

export interface navbarType {
  id: string;
  menuFr: string;
  menuEn: string;
  target: string;
  icon: IconType;
}

export interface MySkillsType {
  name: string;
  levelFr: string;
  levelEn: string;
  icon: IconType;
}

export interface projectCardType {
  id: number;
  img: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  github: boolean;
  githubLink: string;
  githubLinkTwo?: string;
  git?: boolean;
  live: boolean;
  liveLink: string;
  icon: IconType[];
}
