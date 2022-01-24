import React, { useEffect } from "react";
import "./skills.scss";
import { seo } from "../../helpers";
import { motion, useAnimation } from "framer-motion";
import Skill from "./Skill/Skill";
import { skills } from "../../data";
import { useInView } from "react-intersection-observer";

const Skills = () => {
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

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.ul
      id="skills"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={list}
    >
      <div className="skillsWrapper">
        <h1 className="sectionTitle">Used Technologies</h1>
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
