import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./constants/APP_ROUTES";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import ErrorModule from "./pages/Error/ErrorModule";
import Landing from "./pages/Landing/Landing";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={APP_ROUTES.DEFAULT.pathaname} element={<Landing />} />
          <Route path={APP_ROUTES.HOME.pathaname} element={<Home />} />
          <Route path={APP_ROUTES.SKILLS.pathaname} element={<Skills />} />
          <Route path={APP_ROUTES.PROJECTS.pathaname} element={<Projects />} />
          <Route path={APP_ROUTES.EXP.pathaname} element={<Experience />} />
          <Route path={APP_ROUTES.CONTACT.pathaname} element={<Contact />} />
          <Route
            path={APP_ROUTES.SMTH_WENT_WRONG.pathaname}
            element={<ErrorModule />}
          />
        </Routes>
      </Router>
      ;
    </>
  );
};

export default AppRouter;
