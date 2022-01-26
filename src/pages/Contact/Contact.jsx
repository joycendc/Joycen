import React, { useEffect } from "react";
import "./contact.scss";
import { motion, useAnimation } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const animVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 },
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
      ref={ref}
      animate={controls}
      variants={animVariants}
      initial="hidden"
    >
      <div className="contactWrapper">
        <h1 className="sectionTitle">Contact Info</h1>
        <div class="inner">
          <div class="inputs">
            <form name="contact-form" method="post">
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" class="btn" />
            </form>
          </div>
          <div class="contact-info">
            <div class="top-detail">
              <h1>Let’s talk how i can help you!</h1>
              <p>
                If you like to work with me then drop a message using the
                contact form. Or get in touch using email or contact number. See
                you!
              </p>
            </div>
            <div class="bot-detail">
              <div class="detail">
                <MdEmail class="contactIcon" />
                <span>capilijoycen0@gmail.com</span>
              </div>
              {/* <div class="detail">
                <MdEmail class="contactIcon" />
                <span>09156046093</span>
              </div> */}
              <div class="detail">
                <MdEmail class="contactIcon" />
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
