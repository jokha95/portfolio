export interface allDataType {
  projects: {
    id: string;
    title: string;
    description: string;
    demo: string;
    github: string;
    technologies: string[];
    image: {
      url: string;
    };
  }[];
}
