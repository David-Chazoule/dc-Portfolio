import type {
  AboutDataType,
  navbarType,
  MySkillsType,
  projectCardType,
} from "./data.types";
import {
  FaHome,
  FaUser,
  FaFile,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaJira,
  FaDiscord,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiTypescript,
  SiExpress,
  SiPostman,
  SiGooglemeet,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";

/* Menu navBar */

export const navbar: navbarType[] = [
  {
    id: "home",
    menuFr: "ACCUEIL",
    menuEn: "HOME",
    target: "home",
    icon: FaHome,
  },
  {
    id: "about",
    menuFr: "A PROPOS",
    menuEn: "ABOUT",
    target: "about",
    icon: FaUser,
  },

  {
    id: "skills",
    menuFr: "COMPETENCES",
    menuEn: "SKILLS",
    target: "skills",
    icon: FaProjectDiagram,
  },
  {
    id: "courses",
    menuFr: "PARCOURS",
    menuEn: "COURSES",
    target: "courses",
    icon: FaFile,
  },
  {
    id: "projects",
    menuFr: "PROJETS",
    menuEn: "PROJECTS",
    target: "projects",
    icon: FaCode,
  },
  {
    id: "contact",
    menuFr: "CONTACTEZ MOI",
    menuEn: "CONTACT ME",
    target: "contact",
    icon: FaEnvelope,
  },
];

/* home data */

export const homeData = {
  titleFr: "ACCUEIL",
  titleEn: "HOME",
  salutationFr: "Salut ! Je suis",
  salutationEn: "Hello ! I'm am",
  presentationFr: "je suis developpeur front-end junior",
  presentationEn: "I'm developer front-end junior",
};

/* about data */

export const aboutData: AboutDataType = {
  titleFr: "A propos de moi",
  titleEn: "About me",
  aboutTxtFr:
    "Après de nombreuses années d'exercice dans le secteur de la vente, j’ai pris la décision d’effectuer une reconversion dans le domaine du développement web. J’ai pour cela intégré la formation de la Wild Code School de Mars 2021 à Aout 2021 en développement web et mobile (ReactJS / NodeJS) J'ai obtenu mon titre professionnel développeur web et d'application mobile en Octobre 2022.",
  aboutTxtEn:
    "After many years of working in the sales sector, I decided to retrain in the field of web development. To do this, I joined the Wild Code School training from March 2021 to August 2021 in web and mobile development (ReactJS / NodeJS). I obtained my professional title as web and mobile application developer in October 2022.",
  skillOneFr: "Créativité",
  skillOneEn: "Creativity",
  skillTwoFr: "Adaptation",
  skillTwoEn: "Adaptability",
  skillThreeFr: "Autonomie",
  skillThreeEn: "Autonomy",
};

/* skills data */

export const MySkills: MySkillsType[] = [
  {
    name: "HTML",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaCss3Alt,
  },
  {
    name: "SASS",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaSass,
  },
  {
    name: "JAVASCRIPT",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaJs,
  },
  {
    name: "TYPESCRIPT",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: SiTypescript,
  },
  {
    name: "REACT",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaReact,
  },
  {
    name: "EXPRESS",
    levelFr: "les bases",
    levelEn: "the basics",
    icon: SiExpress,
  },
  { name: "NODE", levelFr: "les bases", levelEn: "the basics", icon: FaNodeJs },
];

export const MyTools: MySkillsType[] = [
  {
    name: "GIT/GITHUB",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaGithub,
  },
  {
    name: "VS CODE",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: VscVscodeInsiders,
  },
  {
    name: "POSTMAN",
    levelFr: "les bases",
    levelEn: "the basics",
    icon: SiPostman,
  },
  {
    name: "JIRA",
    levelFr: "les bases",
    levelEn: "the basics",
    icon: FaJira,
  },
  {
    name: "DISCORD",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: FaDiscord,
  },
  {
    name: "GOOGLE MEET",
    levelFr: "intermédiaire",
    levelEn: "intermediate",
    icon: SiGooglemeet,
  },
];

/* contact data */

export const contactData = {
  titleFr: "CONTACTEZ MOI",
  titleEn: "CONTACT ME",
  placeholderNameFr: "Votre nom",
  placeholderNameEn: "Your name",
  placeholderEmailFr: "votre email",
  placeholderEmailEn: "Your email",
  txtAreaFr: "Votre Message",
  txtAreaEn: "your message",
  btnFr: "Soumettre",
  btnEn: "Submit",
};

/* Project title */

export const projectTitle = {
  titleFr: "PROJET",
  titleEn: "PROJECT",
};

/* project card data */

export const project: projectCardType[] = [
  {
    id: 1,
    img: "listUp",
    titleFr: "List-up",
    titleEn: "List-up",
    descriptionFr:
      "List-up est une application web de gestion de tâches en NEXT.js & Prisma. Ajouter, modifier, supprimer, valider et trier des tâches selon ces critères pour une meilleure organisation du quotidien.",
    descriptionEn:
      "List-up is a web-based task management application in NEXT.JS & Prisma. It allows you to add, edit, delete, validate, and sort tasks based on various criteria for better organization of your daily life.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/listup",
    live: false,
    liveLink: "https://david-chazoule.github.io/Crowdfunding-product/",
    icon: [SiNextdotjs, SiTypescript, SiPrisma, FaSass],
  },

  {
    id: 2,
    img: "crowdfunding",
    titleFr: "Page de financement participatif",
    titleEn: "Crowdfunding product page",
    descriptionFr:
      "Ce projet est une page produit de financement participatif. C'est un défi Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project is a crowdfunding product page. It is a Frontend Mentor challenge to improve your web development skills.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/Crowdfunding-product",
    live: true,
    liveLink: "https://david-chazoule.github.io/Crowdfunding-product/",
    icon: [FaReact, SiTypescript, FaSass],
  },

  {
    id: 3,
    img: "ProductList",
    titleFr: "Liste des produits avec panier",
    titleEn: "Space Tourism",
    descriptionFr:
      "Ce projet est une liste de produits qui comprend un panier fonctionnel. C'est un défi Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project is a product listing that includes a functional shopping cart. It is a Frontend Mentor challenge to improve your web development skills.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/Product-list",
    live: true,
    liveLink: "https://david-chazoule.github.io/Product-list/",
    icon: [FaReact, SiTypescript, FaSass],
  },

  {
    id: 4,
    img: "SpaceTourism",
    titleFr: "Tourisme spacial",
    titleEn: "Space Tourism",
    descriptionFr:
      "Ce projet est un site web de tourisme spacial de plusieurs pages. C'est un défi Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project is a multi-page space tourism website. It is a Frontend Mentor challenge to improve your web development skills.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/Space-Tourism",
    live: true,
    liveLink: "https://david-chazoule.github.io/Space-Tourism/#/Home",
    icon: [FaReact, SiTypescript, FaSass],
  },
  {
    id: 5,
    img: "Todo",
    titleFr: "Todo App",
    titleEn: "Todo App",
    descriptionFr:
      "Ce projet est une application de liste à faire. C'est un défi Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project is a to-do list app. It's a Frontend Mentor challenge to improve your web development skills.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/todo-app",
    live: true,
    liveLink: "https://david-chazoule.github.io/todo-app/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 6,
    img: "horae",
    titleFr: "Horae",
    titleEn: "Horae",
    descriptionFr:
      "Application web de prévision météorologique réalisé à l'aide de l'api OpenWeather. ",
    descriptionEn:
      "Weather forecast web application created using the OpenWeather API.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/Horae",
    live: true,
    liveLink: "https://david-chazoule.github.io/Horae/",
    icon: [FaReact, SiTypescript, FaSass, FaNodeJs],
  },
  {
    id: 7,
    img: "portefolio",
    titleFr: "Portfolio",
    titleEn: "Portfolio",
    descriptionFr:
      "Portfolio mettant en avant les divers projets réalisés dans le cadre personnel ou en cours de mon stage et de ma formation.",
    descriptionEn:
      "Portfolio highlighting the various projects carried out in the personal context or during my internship and training.",
    github: true,
    githubLink: "",
    live: false,
    liveLink: "",
    icon: [FaReact, FaJs, FaSass, FaNodeJs],
  },

  {
    id: 8,
    img: "MesureBody",
    titleFr: "Mesure Body",
    titleEn: "Mesure Body",
    descriptionFr:
      "Projet personnel d’une application web « from scratch » permettant de calculer votre indice de masse corporelle et de calculer votre besoin calorique.",
    descriptionEn:
      "Personal project of a web application “ from scratch ” allowing you to calculate your body mass index and calculate your caloric needs.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/BodyMeasure",
    live: true,
    liveLink: "https://david-chazoule.github.io/BodyMeasure/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 9,
    img: "filterJob",
    titleFr: "Job listing",
    titleEn: "Job listing",
    descriptionFr:
      "Application pour filtrer des emplois en fonction de la catégories sélectionnées. C'est un défi Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "Application to filter jobs based on selected categories. It's a Frontend Mentor challenge to improve your web development skills.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/job-listings",
    live: true,
    liveLink: "https://david-chazoule.github.io/job-listings/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 10,
    img: "mortgage_1",
    titleFr: "Calculateur de remboursement",
    titleEn: "Montgage repayment calculator",
    descriptionFr:
      "Ce projet calcule les remboursements hypothécaires en fonction du montant emprunté, du taux d'intérêt et de la durée. Il aide à visualiser le coût total sur une période donnée. C'est un défi Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project calculates mortgage repayments based on the loan amount, interest rate, and duration. It helps visualize the total cost over a given period. It's a Frontend Mentor challenge to improve web development skills",
    github: true,
    githubLink:
      "https://github.com/David-Chazoule/Montgage-repayment-calculator-",
    live: true,
    liveLink:
      "https://david-chazoule.github.io/Montgage-repayment-calculator-/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 11,
    img: "ageCalculator_1",
    titleFr: "Calculateur d'âge",
    titleEn: "Age calculator",
    descriptionFr:
      "Ce projet permet de calculer l'âge d'une personne en fonction de sa date de naissance, offrant une interface simple et interactive.Ce projet est un défi proposé par Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project calculates a person's age based on their birthdate, providing a simple and interactive interface. This project is a challenge offered by Frontend Mentor to improve one's web development skills",
    github: true,
    githubLink: "https://github.com/David-Chazoule/age-calculator",
    live: true,
    liveLink: "https://david-chazoule.github.io/age-calculator/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 12,
    img: "tip_1",
    titleFr: "Calculateur de pourboire",
    titleEn: "Tip calculator",
    descriptionFr:
      "Cette application calcule le pourboire en fonction du montant de l'addition et du pourcentage souhaité, offrant une répartition claire du montant à payer. Ce projet est un défi proposé par Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This app calculates the tip based on the bill amount and the desired percentage, offering a clear breakdown of the total payment. This project is a challenge offered by Frontend Mentor to improve one's web development skills",
    github: true,
    githubLink: "https://github.com/David-Chazoule/tip-calculator",
    live: true,
    liveLink: "https://david-chazoule.github.io/tip-calculator/",
    icon: [FaReact, FaJs, FaSass],
  },
  {
    id: 13,
    img: "card_1",
    titleFr: "Carte interactive",
    titleEn: "Interactive card detail",
    descriptionFr:
      "Ce projet permet aux utilisateurs d'entrer leurs informations de carte de crédit, avec une interface visuelle interactive et dynamique. Ce projet est un défi proposé par Frontend Mentor pour améliorer ses compétences en développement web.",
    descriptionEn:
      "This project allows users to input their credit card details with a dynamic, interactive visual interface. This project is a challenge offered by Frontend Mentor to improve one's web development skills",
    github: true,
    githubLink: "https://github.com/David-Chazoule/interactive-card-detail",
    live: true,
    liveLink: "https://david-chazoule.github.io/interactive-card-detail/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 14,
    img: "password_1",
    titleFr: "Générateur de mot de passe",
    titleEn: "Password Generator",
    descriptionFr:
      "Ce générateur crée des mots de passe sécurisés en fonction des critères choisis, tels que la longueur et le type de caractères.",
    descriptionEn:
      "This generator creates secure passwords based on selected criteria, such as length and character types.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/PasswordGenerator",
    live: true,
    liveLink: "https://david-chazoule.github.io/PasswordGenerator/",
    icon: [FaReact, FaJs, FaSass],
  },

  {
    id: 15,
    img: "technologeek",
    titleFr: "Technologeek",
    titleEn: "Technologeek",
    descriptionFr:
      "Projet d’application web d'e-commerce réalisé pour l'obtention du titre professionnel « développeur web et d'application mobile » Réalisation du projet  « from stretch » aussi bien du coté front-end que back-end.",
    descriptionEn:
      "E-commerce web application project carried out to obtain the professional title “web and mobile application developer” Realization of the “from stratch” project on both the front-end and back-end sides.",
    github: true,
    githubLink: "https://github.com/David-Chazoule/e-shop-front/tree/dev",
    githubLinkTwo: "https://github.com/David-Chazoule/e-shop-back",
    git: true,
    live: false,
    liveLink: "",
    icon: [FaReact, FaJs, FaSass, FaNodeJs],
  },

  {
    id: 16,
    img: "NumeroVert",
    titleFr: "Numero Vert",
    titleEn: "Green number",
    descriptionFr:
      "Pendant mon stage en tant que développeur web front-end chez ColorTélécom, j’ai participé à la réalisation de la page web d’abonnement pour l’obtention un numéro vert.",
    descriptionEn:
      "During my internship as a front-end web developer at ColorTélécom, I participated in the creation of the subscription web page to obtain a toll-free number.",
    github: false,
    githubLink: "",
    live: true,
    liveLink: "https://numerovert.standardenligne.fr/",
    icon: [FaReact, FaJs, FaCss3Alt, FaNodeJs],
  },
  {
    id: 17,
    img: "centrex",
    titleFr: "Téléphonie centrex",
    titleEn: "Centrex telephony",
    descriptionFr:
      "Pendant mon stage en tant que développeur web front-end chez ColorTélécom, j’ai participé à la réalisation de la page web d’abonnement pour l’obtention un abonnement en téléphonie centrex.",
    descriptionEn:
      "During my internship as a front-end web developer at ColorTélécom, I participated in the creation of the subscription web page to obtain a Centrex telephony subscription.",
    github: false,
    githubLink: "",
    live: true,
    liveLink: "https://telephonieip.standardenligne.fr/",
    icon: [FaReact, FaJs, FaCss3Alt, FaNodeJs],
  },
  {
    id: 18,
    img: "vert",
    titleFr: "Standard virtuel",
    titleEn: "Virtual switchboard",
    descriptionFr:
      "Pendant mon stage en tant que développeur web front-end chez ColorTélécom, j’ai participé à la réalisation de la page web d’abonnement pour l’obtention d’un standard virtuel.",
    descriptionEn:
      "During my internship as a front-end web developer at ColorTélécom, I participated in the creation of the subscription web page to obtain a virtual standard.",
    github: false,
    githubLink: "https://github.com/David-Chazoule",
    live: true,
    liveLink: "https://commande.standardenligne.fr/",
    icon: [FaReact, FaJs, FaCss3Alt, FaNodeJs],
  },

  {
    id: 19,
    img: "MarsWebSite",
    titleFr: "Mars Ma Zon",
    titleEn: "Mars Ma Zon",
    descriptionFr:
      "Application Web marketPlace de technologie développées par la Nasa. Réalisé au cours d'un hackathon en 24h lors de ma formation à la Wild code School avec deux camarades. Utilisation de l'API de la Nasa - TechTransfert.",
    descriptionEn:
      "Technology marketPlace web application developed by NASA. Carried out during a 24-hour hackathon during my training at the Wild Code School with two friends.Use of the NASA API - TechTransfert.",
    github: false,
    githubLink: "",
    live: true,
    liveLink: "https://pelegrand.github.io/earth_at_hack/",
    icon: [FaReact, FaJs, FaCss3Alt, FaNodeJs],
  },
];
