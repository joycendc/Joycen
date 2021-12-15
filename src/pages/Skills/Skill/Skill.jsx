import React from "react";
import "./skill.scss";
import { motion } from "framer-motion";

const Skill = ({ title, src }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <div className="skillCard">
        <img alt={title} src={src} />
        <span>{title}</span>
      </div>
    </motion.div>
  );
};

export default Skill;
