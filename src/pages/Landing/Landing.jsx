import React from "react";
import Home from "../Home/Home";

import Contact from "../Contact/Contact";
import Navbar from "../../compnents/Navbar";
import Layout from "../../compnents/Layout";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import { useTheme } from "@mui/material";

const Landing = ({ currentTheme, toggleTheme }) => {
  const theme = useTheme();
  const { bgColor } = theme.palette;
  const ids = {
    home: "home",
    skills: "skills",
    exp: "experience",
    projects: "projects",
    contact: "contact",
  };

  return (
    <>
      <Layout sx={{ backgroundColor: bgColor.main }}>
        <Navbar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Home id={ids.home} />
        <Experience id={ids.exp} />
        <Skills id={ids.skills} />
        <Projects id={ids.projects} />
        <Contact id={ids.contact} />
      </Layout>
    </>
  );
};

export default Landing;
