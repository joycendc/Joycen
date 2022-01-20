import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="homeWrapper">
        <div className="homeContainer">
          <div className="name">JOYCEN CAPILI</div>
          <div className="desc">Web Developer / Android Developer</div>
          <div className="desc"></div>
          <img
            className="avatar"
            src="https://joycendc.github.io/Profile/images/avatar.png"
            alt="joycen"
          />
          <div className="cta">
            <Link to="/contact" className="email">
              {<MdEmail />} Email
            </Link>
            <Link
              className="resume"
              to="/Joycen Capili - Resume.pdf"
              target="_blank"
              download
            >
              {<FaDownload />} Resume
            </Link>
          </div>
          <div className="socialIcons">
            <div className="socialLink">
              <Link
                to={{ pathname: "https://facebook.com/joycenc11" }}
                target="_blank"
              >
                <FaFacebook className="icon fb" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/joycendc" }}
                target="_blank"
              >
                <FaGithub className="icon git" />
              </Link>
              <Link
                to={{ pathname: "https://twitter.com/oioicen" }}
                target="_blank"
              >
                <FaTwitter className="icon tt" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
