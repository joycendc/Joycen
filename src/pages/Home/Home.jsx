import React, { useEffect } from "react";
import "./home.scss";
// import { seo } from "../../helpers";
import { FaFacebook, FaTwitter, FaGithub, FaDownload } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Home = () => {
  // useEffect(() => {
  //   seo({
  //     title: "Home | Joycen",
  //     metaDescription: "Home",
  //   });
  // }, []);
  const animVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0 } },
    hidden: { opacity: 0, y: 100 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="home"
      ref={ref}
      animate={controls}
      variants={animVariants}
      initial="hidden"
    >
      <div className="homeWrapper">
        <div className="homeContainer">
          <span className="greet">Hello, my name is</span>
          <span className="name">JOYCEN CAPILI</span>
          <span className="desc">
            Web Developer <div></div> Android Developer
          </span>

          <div className="cta">
            <a href="#contact" className="email">
              {<MdEmail />} Email
            </a>
            <a
              className="resume"
              href="/Joycen Capili - Resume.pdf"
              target="_blank"
              download
            >
              {<FaDownload />} Resume
            </a>
          </div>
          <div className="socialIcons">
            <div className="socialLink">
              <a
                href="https://facebook.com/joycenc11"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="icon fb" />
              </a>
              <a
                href="https://github.com/joycendc"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="icon git" />
              </a>
              <a
                href={{ pathname: "https://twitter.com/oioicen" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="icon tt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
