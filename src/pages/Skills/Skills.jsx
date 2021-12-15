import React, { useEffect } from "react";
import "./skills.scss";
import { seo } from "../../helpers";
import { motion } from "framer-motion";
import Skill from "./Skill/Skill";
import { skills } from "../../data";

const Skills = () => {
  useEffect(() => {
    seo({
      title: "Skills | Joycen",
      metaDescription: "About Joycen",
    });
  }, []);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
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
      <div className="skillsWrapper">
        {skills.map((skill) => (
          <motion.li
            className="skillItem"
            style={{ listStyle: "none" }}
            key={skill.id}
            variants={item}
          >
            <Skill title={skill.title} src={skill.src} />
          </motion.li>
        ))}
      </div>
    </motion.ul>
  );
};

export default Skills;
