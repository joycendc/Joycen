import React, { useEffect } from "react";
import "./projects.scss";
import { seo } from "../../helpers";
import { motion } from "framer-motion";
import Project from "./Project/Project";
import { projects } from "../../data";

const Projects = () => {
  useEffect(() => {
    seo({
      title: "Projects | Joycen",
      metaDescription: "Joycen's Project",
    });
  }, []);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  return (
    <motion.ul initial="hidden" animate="visible" variants={list}>
      <div className="projectWrapper">
        {projects.map((proj) => (
          <motion.li
            className="projItem"
            style={{ listStyle: "none" }}
            key={proj.id}
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
