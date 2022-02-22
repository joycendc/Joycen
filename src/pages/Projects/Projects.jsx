import React, { useEffect } from "react";
import "./projects.scss";
import { motion, useAnimation } from "framer-motion";
import Project from "./Project/Project";
import { projects } from "../../data";

import { useInView } from "react-intersection-observer";

const Projects = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.ul
      id="projects"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={list}
    >
      <div className="projectWrapper">
        <h1 className="sectionTitle">Projects</h1>
        {projects.map((proj, index) => (
          <motion.li
            className="projItem"
            style={{ listStyle: "none" }}
            key={index}
            variants={item}
          >
            <Project data={proj} />
          </motion.li>
        ))}
      </div>
    </motion.ul>
  );
};

export default Projects;
