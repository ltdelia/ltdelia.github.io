import * as React from "react";
import { CssBaseline } from "@mui/material";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import "./styles/main.scss";
import Other from "./components/Other/Other";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="wrapper">
        <NavBar />
        <div className="sections-container">
          <AboutMe />
          <Skills />
          <Work />
          <Other />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
