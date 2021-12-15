import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./app.scss";
import Header from "./components/Header/Header";
import NavLeft from "./components/NavLeft/NavLeft";
import NavRight from "./components/NavRight/NavRight";
import Particles from "react-tsparticles";
import { particlesConfig } from "./helpers";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  const NotFound = () => (
    <main
      style={{
        width: "100%",
        textAlign: "center",
        padding: "10rem 0",
      }}
    >
      <p>404 Page Not Found !</p>
    </main>
  );

  return (
    <div
      className="mainWrapper"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute" }}>
        <Particles
          style={{ zIndex: "0" }}
          height="100vh"
          width="100vw"
          params={particlesConfig}
        />
      </div>
      {location.pathname !== "/" && <Header />}
      <NavLeft />
      <NavRight />

      <div className="mainContainer">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/*" component={<NotFound />} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
