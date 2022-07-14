import React, { useEffect } from "react";
import "./about.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdGroup, MdMobileFriendly, MdTimer, MdWeb } from "react-icons/md";

const animVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } },
  hidden: { opacity: 0, y: 100 },
};
const About = () => {
  const Item = ({ icon, desc, title }) => {
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
        <div className="container" ref={ref}>
          {icon ? (
            <>{icon} </>
          ) : (
            <img
              className="avatar circle"
              src="https://joycendc.github.io/Profile/images/avatar.png"
              alt="joycen"
            />
          )}
          {title ? <h2>{title}</h2> : null}
          <div className="aboutDesc">{desc}</div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="aboutWrapper">
      <h1 className="sectionTitle">About Me</h1>
      <Item desc="Hello! I’m Joycen Capili. I am passionate about Programming and Web Design. I am currently studying at Cavite State University taking Bachelor of Science in Information Technology." />

      <h1 className="sectionTitle">What Can I Do</h1>
      <Item
        icon={<MdMobileFriendly className="avatar" />}
        title="Mobile Development"
        desc="Develop cross platform mobile application using react native."
      />
      <Item
        icon={<MdWeb className="avatar" />}
        title="Web Development"
        desc="Transform UI/UX Design to a functional and responsive website."
      />
      <Item
        icon={<MdGroup className="avatar" />}
        title="Team Player"
        desc="Work and collaborate on other people for better project outcome."
      />
    </div>
  );
};

export default About;
