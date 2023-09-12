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
  crow1render,
  rickandmortygifs
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
    title: "Desarrollador de Software",
    company_name: "EDSA",
    icon: edsa,
    iconBg: "#383E56",
    date: "Abril 2021 - Actualidad",
    points: [
      "Participando en desarrollo de nuevas funcionalidades a una aplicación Android nativa programada en Java con servicio en Spring, esta aplicación se conecta con un ERP por medio de SP a una base SQL Server.",
      "Mantenimiento de ERP desarrollado en Centura, me encontré con el desafío de aprender este lenguaje entrando al equipo.",

    ],
  },

];



const projects = [
  {
    name: "Minecraft Clone",
    description:
      "Aplicación web creada en React y Threejs, con el fin de aprender a usar Threejs y sus funcionalidades. Para el desarrollo se utilizo de ejemplo el proyecto de freeCodeCamp. El proyecto estaba desactualizado, lo que me ayudo a entrar mucho más en la documentación de la librería",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      }
    ],
    image: minecraftClone,
    source_code_link: "https://github.com/maatist/minecraft-clone",
  },
  {
    name: "Crow Funding",
    description:
      "Este proyecto de React es interesante, ya que interactúa directamente con un contrato inteligente programado en Solidity deployado sobre la red de pruebas sepolia. Para interactuar con él, se utiliza la billetera Metamask. Desde el cliente se utiliza Thirdweb para llamar al smart contract y realizar transacciones",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Thirdweb",
        color: "blue-text-gradient",
      },
      {
        name: "Ethers",
        color: "pink-text-gradient",
      },
    ],
    image: crow1render,
    source_code_link: "https://github.com/maatist/crowfunding",
  },
  {
    name: "Rick and Morty GIFs",
    description:
      "En este proyecto de React, interactuo con un smart contract desarrollado en Rust y deployado en la Devnet de Solana. Para interactuar con esta utilice la libreria Solana-Web3.js. Este fue mi primer proyecto web3",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solana",
        color: "green-text-gradient",
      },
      {
        name: "Rust",
        color: "pink-text-gradient",
      },
      {
        name: "Web3.js",
        color: "blue-text-gradient",
      },
    ],
    image: rickandmortygifs,
    source_code_link: "https://github.com/maatist/Solana_buildspace_1-GIF",
  },
];

export { services, technologies, experiences, projects };