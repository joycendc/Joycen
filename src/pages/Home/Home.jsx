import React, { useEffect } from "react";
import "./home.scss";
import { seo } from "../../helpers";
import { FaFacebook, FaTwitter, FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    seo({
      title: "Home | Joycen",
      metaDescription: "Home",
    });
  }, []);
  return (
    <motion.div
      id="home"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="homeWrapper">
        <div className="homeContainer">
          <div className="name">JOYCEN CAPILI</div>
          <div className="desc">
            Web Developer <div></div> Android Developer
          </div>

          <img
            className="avatar"
            src="https://joycendc.github.io/Profile/images/avatar.png"
            alt="joycen"
          />
          <div className="cta">
            <a href="/contact" className="email">
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
