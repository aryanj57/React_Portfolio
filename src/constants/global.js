import { APP_ROUTES } from "./APP_ROUTES";

export const ids = {
  HOME: "home",
  SKILL: "skills",
  EXP: "experience",
  PRO: "projects",
  CON: "contact",
};

export const navOptions = [
  {
    title: "Home",
    link: APP_ROUTES.HOME.pathaname,
    id: "home",
  },
  {
    title: "Experience",
    link: APP_ROUTES.EXP.pathaname,
    id: "experience",
  },
  {
    title: "Skills",
    link: APP_ROUTES.SKILLS.pathaname,
    id: "skills",
  },
  {
    title: "Projects",
    link: APP_ROUTES.PROJECTS.pathaname,
    id: "projects",
  },
  {
    title: "Contact",
    link: APP_ROUTES.CONTACT.pathaname,
    id: "contact",
  },
];
