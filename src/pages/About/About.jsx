import React, { useEffect } from "react";
import "./about.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdGroup, MdTimer } from "react-icons/md";

const animVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0 } },
  hidden: { opacity: 0, y: 100 },
};
const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <motion.div
      id="about"
      animate={controls}
      variants={animVariants}
      initial="hidden"
    >
      <div className="aboutWrapper" ref={ref}>
        <h1 className="sectionTitle">About Me</h1>
        <div className="container">
          <img
            className="avatar circle"
            src="https://joycendc.github.io/Profile/images/avatar.png"
            alt="joycen"
          />
          <div className="aboutDesc">
            Hello! I’m Joycen Capili. I am passionate about Programming and Web
            Design. I am currently studying at Cavite State University taking
            Bachelor of Science in Information Technology.
          </div>
        </div>
        <div className="container">
          <MdTimer className="avatar" />
          <div className="aboutDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas
            cupiditate optio nostrum tempora, debitis corrupti, distinctio cum
            obcaecati officiis recusandae, beatae pariatur magnam voluptatibus.
          </div>
        </div>
        <div className="container">
          <MdGroup className="avatar" />
          <div className="aboutDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            possimus quaerat vel maxime deserunt, sequi veritatis sapiente
            doloribus facilis quam quas! Minima consectetur tenetur ab!
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
