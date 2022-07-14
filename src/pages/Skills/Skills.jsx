import React, { useEffect } from "react";
import "./skills.scss";
import { motion, useAnimation } from "framer-motion";
import Skill from "./Skill/Skill";
import { skills } from "../../data";
import { useInView } from "react-intersection-observer";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.02,
      delay: 0.3,
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

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <motion.ul id="skills" initial="hidden" animate={controls} variants={list}>
      <div className="skillsWrapper">
        <h1 className="sectionTitle" ref={ref}>
          Technology i touched
        </h1>
        {skills.map((skill, index) => (
          <motion.li
            className="skillItem"
            style={{ listStyle: "none" }}
            key={index}
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
