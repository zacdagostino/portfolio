export interface ProjectInfo {
    title: string;
    list: (string | string[])[];
  }
  
  export interface ExperienceData {
    type: string;
    projectName: string;
    position: string;
    shortOverview: string;
    projectOverview: string;
    githubLink: string;
    projectInfo: ProjectInfo[];
    professionalGrowth: string;
    date: string;
    stack: string[];
  }
  