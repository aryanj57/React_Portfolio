import React from "react";
import Home from "../Home/Home";

import Contact from "../Contact/Contact";
import Navbar from "../../compnents/Navbar";
import Layout from "../../compnents/Layout";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

const Landing = () => {
  const ids = {
    home: "home",
    skills: "skills",
    exp: "experience",
    projects: "projects",
    contact: "contact",
  };

  return (
    <>
      <Layout sx={{ backgroundColor: "#F7F7F7" }}>
        <Navbar />
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
