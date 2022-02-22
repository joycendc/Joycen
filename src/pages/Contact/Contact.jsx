import React, { useEffect } from "react";
import "./contact.scss";
import { motion, useAnimation } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const animVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
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
      id="contact"
      animate={controls}
      variants={animVariants}
      initial="hidden"
    >
      <div className="contactWrapper">
        <h1 className="sectionTitle">Contact Info</h1>
        <div className="inner">
          <div className="inputs">
            <form name="contact-form" method="post">
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" class="btn" />
            </form>
          </div>
          <div className="contact-info" ref={ref}>
            <div className="top-detail">
              <h1>Let’s talk how i can help you!</h1>
              <p>
                If you like to work with me then drop a message using the
                contact form. Or get in touch using email or contact number. See
                you!
              </p>
            </div>
            <div className="bot-detail">
              <div className="detail">
                <MdEmail className="contactIcon" />
                <span>capilijoycen0@gmail.com</span>
              </div>
              <div className="detail">
                <MdEmail className="contactIcon" />
                <span>Bacoor City Cavite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
