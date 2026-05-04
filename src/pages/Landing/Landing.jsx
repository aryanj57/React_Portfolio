import Home from "../Home/Home";

import Layout from "../../compnents/Layout";
import Navbar from "../../compnents/Navbar";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";

import { useEffect, useRef, useState } from "react";
import { ids } from "../../constants/global";
import Projects from "../Projects/Projects";

const Landing = ({ currentTheme, toggleTheme }) => {
  const [selectedId, setSelectedId] = useState(ids.HOME);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sectionIds = Object.values(ids);

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (isScrollingRef.current) return;
          let maxEntry = null;

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (
                !maxEntry ||
                entry.intersectionRatio > maxEntry.intersectionRatio
              ) {
                maxEntry = entry;
              }
            }
          });

          if (maxEntry) {
            setSelectedId(maxEntry.target.id);
          }
        },
        {
          threshold: [0.2, 0.6],
          rootMargin: "-100px 0px -40% 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Layout>
        <Navbar
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
          setIsScrolling={(val) => (isScrollingRef.current = val)}
        />
        <Home id={ids.HOME} />
        <Experience id={ids.EXP} />
        <Skills id={ids.SKILL} />
        <Projects id={ids.PRO} />
        <Contact id={ids.CON} />
      </Layout>
    </>
  );
};

export default Landing;
