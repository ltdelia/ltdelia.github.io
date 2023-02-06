import * as React from "react";
import { CssBaseline } from "@mui/material";

import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Other from "./components/Other/Other";
import Footer from "./components/UI/Section/Footer";

import "./styles/main.scss";

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
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
