import React, { useState, useEffect } from "react";
import "./project.scss";
import { MdLanguage } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0 } },
  hidden: { opacity: 0, y: 100 },
};

const Project = ({ data }) => {
  const [display, setDisplay] = useState("projInfo");
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={animVariants}
      initial="hidden"
    >
      <div className="projectCard">
        <div className="project">
          <div className={display}>
            <h1>{data.name}</h1>
            <span className="projDesc">{data.desc}</span>
            <div className="tags">
              {data.tags.map((tag, index) => {
                return (
                  <p className="tag" key={index}>
                    {tag}
                  </p>
                );
              })}
            </div>
            <div className="cta">
              {data.link && (
                <a
                  className="link"
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="goto">{<MdLanguage />} Demo</button>
                </a>
              )}
              {data.src && (
                <a
                  className="link"
                  href={data.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="goto src">{<FaGithub />} Source</button>
                </a>
              )}
            </div>
          </div>
          <div
            onMouseEnter={(e) => setDisplay("projInfoHidden")}
            onMouseLeave={(e) => setDisplay("projInfo")}
            className="hoverDiv"
          ></div>
          <img alt={data.name} src={data.img} />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
