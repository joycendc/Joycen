import React, { useEffect } from "react";
import "./about.scss";
import { seo } from "../../helpers";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    seo({
      title: "About | Joycen",
      metaDescription: "About Joycen",
    });
  }, []);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aboutWrapper">
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
