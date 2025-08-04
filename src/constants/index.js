import {
  mobile,
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
  edsa,
  mcl,
  konexaLogo,
  unoAfpLogo,
  minecraftClone,
  crow1render,
  rickandmortygifs,
  aStudio,
  expressjs,
  firebase,
  flutter,
  GitHub,
  java,
  mysql,
  nextjs,
  springBoot,
  postgresql,
  postman,
  solidity,
  sqlServer,
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

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: reactjs,
      },
      {
        name: "Redux",
        image: redux,
      },
      {
        name: "Next Js",
        image:
          nextjs,
      },
      {
        name: "TailwindCSS",
        image:
          tailwind,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodejs,
      },
      {
        name: "Express Js",
        image: expressjs,
      },
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "SQLServer",
        image: sqlServer,
      },
      {
        name: "Firebase",
        image: firebase,
      },
      {
        name: "PostgreSQL",
        image: postgresql,
      },
      {
        name: "SpringBoot",
        image: springBoot,
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "Java",
        image:
          java,
      },
      {
        name: "Android Studio",
        image:
          aStudio,
      },
      {
        name: "Flutter",
        image:
          flutter,
      },
    ],
  },
  {
    title: "Otros",
    skills: [
      {
        name: "GitHub",
        image:
          GitHub,
      },
      {
        name: "Postman",
        image:
          postman,
      },
      {
        name: "Solidity",
        image:
          solidity,
      },
    ],
  },
];

const experiences = [
  {
    title: "Desarrollador Fullstack",
    company_name: "AFP Uno",
    icon: unoAfpLogo,
    iconBg: "#383E56",
    date: "Enero 2025 - Actualidad",
    points: [
      "Desarrollo en celula para proyectos de uso interno en la AFP.",
      "Implementando microservicios en SpringBoot, con BD PostgreSql y React para el frontend"
    ],
  },
  {
    title: "Desarrollador backend",
    company_name: "Konexa",
    icon: konexaLogo,
    iconBg: "#383E56",
    date: "Agosto 2024 - Enero 2025",
    points: [
      "Desarrollo en celula de importante cliente financiero.",
      "Implementando microservicios en SpringBoot, con BD PostgreSql y ocasionalmente mejoras en frontend con React en webApp pública."
    ],
  },
  {
    title: "Desarrollador de Software",
    company_name: "MCL Consulting",
    icon: mcl,
    iconBg: "#383E56",
    date: "Diciembre 2023 - Febrero 2024",
    points: [
      "Desarrollo de proyectos del área educativa.",
      "Software de biblioteca y préstamos con backend en SpringBoot, Front con FreeMarker y JQuery para el contenido dinámico. Utilizando PostgreSql para la base de datos"
    ],
  },
  {
    title: "Desarrollador de Software",
    company_name: "EDSA",
    icon: edsa,
    iconBg: "#383E56",
    date: "Abril 2021 - Noviembre 2023",
    points: [
      "Participando en desarrollo de nuevas funcionalidades a una aplicación Android nativa programada en Java con servicio en Spring, esta aplicación se conecta con un ERP por medio de SP a una base SQL Server.",
      "Mantenimiento de ERP desarrollado en Centura, me encontré con el desafío de aprender este lenguaje entrando al equipo.",

    ],
  },

];



const projects = [

  {
    name: "Crow Funding",
    description:
      "Este proyecto de React es interesante, ya que interactúa directamente con un contrato inteligente programado en Solidity deployado sobre la red de pruebas de ethereum, sepolia. Para interactuar con él, se utiliza la billetera Metamask. Desde el cliente se utiliza Thirdweb para llamar al smart contract y realizar transacciones.",
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
      "En este proyecto de React, interactuo con un smart contract desarrollado en Rust y deployado en la Devnet de Solana. Para interactuar con esta utilice la libreria Solana-Web3.js. Este fue mi primer proyecto web3.",
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
  {
    name: "Minecraft Clone",
    description:
      "Aplicación web creada en React y Threejs, con el fin de aprender a usar Threejs y sus funcionalidades. Para el desarrollo se utilizo de ejemplo el proyecto de freeCodeCamp. El proyecto estaba desactualizado, lo que me ayudo a entrar mucho más en la documentación de la librería.",
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
];

export { services, technologies, experiences, projects, skills };