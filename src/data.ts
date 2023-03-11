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
    name: "Flask",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
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
      "Deployed the backend using AWS Elastic Beanstalk and Docker.",
    ],

    stack: [
      "Node",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "HTML",
      "Styled Components",
      "JavaScript",
      "React",
      "Redux",
      "AWS S3",
      "AWS EB",
      "Nginx",
      "Docker",
    ],
    github: "https://github.com/Hargun22/az-shopping",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/AZ-shopping.png",
  },
  {
    name: "Boardzilla",
    description: [
      "A dashboard style website allowing users to add multiple widgets like Weather, Stocks, Calendar, News, and Sticky notes to their custom dashboard",
      "Implemented drag, drop and resizing functionality",
      "Implemented Sticky notes widget end-to-end",
    ],

    stack: [
      "Node",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
    ],
    github: "https://github.com/Hargun22/Boardzilla-Fixed",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Boardzilla.png",
  },
  {
    name: "Indeed Keyword Scraper",
    description: [
      "A web scraper that scrapes Indeed for jobs matching a given keyword and location",
      "Developed a REST API using Flask and used BeautifulSoup to scrape Indeed",
    ],
    stack: [
      "Python",
      "Flask",
      "BeautifulSoup",
      "React",
      "Redux",
      "HTML",
      "Tailwind",
      "TypeScript",
    ],
    github: "https://github.com/Hargun22/Indeed-Scraper",
    image: "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Indeed.png",
  },
  {
    name: "Mini Uber Eats Clone",
    description: [
      "Developed an Uber Eats inspired food delivery app that allows users to search nearby restaurants and add items to their cart using Yelp API.",
      "Focused primarily on the frontend using React Native and Google Maps API.",
    ],

    stack: [
      "React Native",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Yelp API",
      "Google Maps API",
    ],
    github: "https://github.com/Hargun22/Uber-Eats-Clone",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Uber+Eats.jpg",
  },
  {
    name: "BillRemind App",
    description: [
      "iOS app that lets users setup reminders for recurring bills or activities.",
      "Allows for daily, bi-weekly, weekly, monthly, semi-annually, and yearly reminders.",
      "Over 3000 downloads on the App Store.",
    ],

    stack: ["Swift", "XCode"],
    github: "https://github.com/Hargun22/BillRemind",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/BillRemind.jpg",
  },
  {
    name: "Reddit.Web",
    description: [
      "A web tool for visualizing the connections between subreddits using hyperlink connections data",
      "Utilized object-oriented programming and graphing algorithms to traverse and represent 850,000+ nodes",
    ],

    stack: ["Java", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Hargun22/Reddit.Web",
    image:
      "https://hb-portfolio-bucket.s3.us-east-2.amazonaws.com/Reddit.Web.png",
  },
];
