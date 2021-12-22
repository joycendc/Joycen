import React, { useEffect } from "react";
import "./contact.scss";
import { seo } from "../../helpers";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    seo({
      title: "Contact | Joycen",
      metaDescription: "Joycen's Contact",
    });
  }, []);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="contactWrapper">
        <div class="inner">
          <div class="inputs">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Your Message"></textarea>
              <button class="btn">Send</button>
            </form>
          </div>
          <div class="contact-info">
            <div class="top-detail">
              <h1 className="title">Contact Info</h1>
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
                <label>Contact</label>
                <span>09156046093</span>
              </div>
              <div class="detail">
                <label>Address</label>
                <span>Bacoor City Cavite</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
