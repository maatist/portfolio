import {
  mobile,
  backend,
  creator,
  web,
  blockchain,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  edsa,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  minecraftClone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },

  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Desarrollador de Software Jr",
    company_name: "EDSA",
    icon: edsa,
    iconBg: "#383E56",
    date: "Abril 2021 - Actualidad",
    points: [
      "Participando en desarrollo de nuevas funcionalidades a una aplicación Android nativa programada en Java con servicio en Spring, esta aplicación se conecta con un ERP por medio de SP a una base SQL Server.",
      "Mantenimiento de ERP desarrollado en Centura, me encontré con el desafió de aprender este lenguaje entrando al equipo.",

    ],
  },

];



const projects = [
  {
    name: "Minecraft Clone",
    description:
      "Aplicacion web creada en React y Threejs, con el fin de aprender a usar Threejs y sus funcionalidades. Para el desarrollo se utilizo de ejemplo el proyecto de freeCodeCamp",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: minecraftClone,
    source_code_link: "https://github.com/maatist/minecraft-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };