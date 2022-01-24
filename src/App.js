import React, { useRef } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./app.scss";
import Header from "./components/Header/Header";
import Particles from "react-tsparticles";
import { particlesConfig } from "./helpers";
import Footer from "./components/Footer/Footer";

function App() {
  const cursor = useRef(null);

  const handleCursor = (e) => {
    cursor.current.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  };

  const handleClick = (e) => {
    cursor.current.classList.add("expand");

    setTimeout(() => {
      cursor.current.classList.remove("expand");
    }, 500);
  };

  return (
    <div
      onMouseMove={handleCursor}
      onClick={handleClick}
      className="mainWrapper"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="cursor" ref={cursor}></div>
      <div style={{ position: "absolute" }}>
        <Particles
          style={{ zIndex: "0" }}
          height="100vh"
          width="100vw"
          params={particlesConfig}
        />
      </div>
      <Header />

      <div className="mainContainer">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
