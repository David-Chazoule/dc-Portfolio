import type { IconType } from "react-icons";

export interface AboutDataType {
  titleFr: string;
  titleEn: string;
  aboutTxtFr: string;
  aboutTxtEn: string;
  skillTitleFr: string;
  skillTitleEn: string;
  skillImg: string[];
}


export interface navbarType {
 id:string,
     menuFr: string,
     menuEn: string,
     target :string,
     icon: IconType, 
}