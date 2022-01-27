import React, { useEffect } from "react";
import "./about.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const animVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0 } },
    hidden: { opacity: 0, y: 100 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      id="about"
      animate={controls}
      variants={animVariants}
      initial="hidden"
    >
      <div className="aboutWrapper">
        <h1 className="sectionTitle">About Me</h1>
        <img
          ref={ref}
          className="avatar"
          src="https://joycendc.github.io/Profile/images/avatar.png"
          alt="joycen"
        />

        <div className="aboutDesc">
          Hello! I’m Joycen Capili. I am passionate about Programming and Web
          Design. I am currently studying at Cavite State University taking
          Bachelor of Science in Information Technology.
        </div>
      </div>
    </motion.div>
  );
};

export default About;
