import { SiJava, SiPython } from "react-icons/si";

export type Link = {
  page: string;
};

export const links: Link[] = [
  {
    page: "Home",
  },
  {
    page: "Skills",
  },
  {
    page: "Projects",
  },
  {
    page: "Contact",
  },
];

type Skill = {
  name: string;
  src: string;
};

export const skills: Skill[] = [
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Swift",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Jest",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export type Project = {
  name: string;
  description: string[];
  stack: string[];
  github: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "AZ-Shopping",
    description: [
      "A full stack e-commerce website built using a microservice architecture, with a heavy focus on the backend",
      "Created key services such as user, authentication, product, cart, order and payment.",
      "Deployed the backend using AWS Elastic Beanstalk and Docker.",
    ],

    stack: [
      "Node",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "HTML",
      "Styled Components",
      "React",
      "Redux",
      "AWS S3",
      "AWS Elastic Beanstalk",
      "Nginx",
      "Docker",
    ],
    github: "https://github.com/Hargun22/az-shopping",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Screen+Shot+2023-02-21+at+6.35.10+PM.png",
  },
  {
    name: "Boardzilla",
    description: [
      "A full stack e-commerce website built using a microservice architecture, with a heavy focus on the backend",
      "Created key services such as user, authentication, product, cart, order and payment.",
      "Deployed the backend using AWS Elastic Beanstalk and Docker.",
    ],

    stack: ["Node", "Express", "MongoDB", "HTML", "CSS", "React", "Redux"],
    github: "https://github.com/Hargun22/az-shopping",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Screen+Shot+2023-02-21+at+6.35.10+PM.png",
  },
  {
    name: "AZ-Shopping",
    description: [
      "A full stack e-commerce website built using a microservice architecture, with a heavy focus on the backend",
      "Created key services such as user, authentication, product, cart, order and payment.",
      "Deployed the backend using AWS Elastic Beanstalk and Docker.",
    ],

    stack: [
      "Node",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "HTML",
      "Styled Components",
      "React",
      "Redux",
      "AWS S3",
      "AWS Elastic Beanstalk",
      "Nginx",
      "Docker",
    ],
    github: "https://github.com/Hargun22/az-shopping",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Screen+Shot+2023-02-21+at+6.35.10+PM.png",
  },
  {
    name: "Boardzilla",
    description: [
      "A full stack e-commerce website built using a microservice architecture, with a heavy focus on the backend",
      "Created key services such as user, authentication, product, cart, order and payment.",
      "Deployed the backend using AWS Elastic Beanstalk and Docker.",
    ],

    stack: ["Node", "Express", "MongoDB", "HTML", "CSS", "React", "Redux"],
    github: "https://github.com/Hargun22/az-shopping",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Screen+Shot+2023-02-21+at+6.35.10+PM.png",
  },
];
