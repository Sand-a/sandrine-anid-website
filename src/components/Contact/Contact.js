import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";
import SectionHeadline from "../Utility/SectionHeadline";

const Contact = ({ sectionRevealVariants }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqqqku2",
        "template_ir1uewq",
        form.current,
        "dTBSZ2Eq7M3l7T5WI"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="let-s-connect" className=" section--4">
      <motion.div
        variants={sectionRevealVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="section container section-contact"
      >
        <SectionHeadline
          line1="Let’s connect"
          addClass1="contact-headline-1"
          line2=" Drop me a Line !"
          addClass2="contact-headline-2"
        />

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="bodytext">
              Name <b className="red">*</b>
            </label>
            <input
              className="searchfield"
              type="text"
              placeholder="your name"
              name="user_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="bodytext">
              Email <b className="red">*</b>
            </label>
            <input
              className="searchfield"
              type="email"
              name="user_email"
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="bodytext">
              Message
            </label>
            <textarea
              className="searchfield"
              type="text"
              name="user_message"
              cols="30"
              rows="5"
            ></textarea>
            <div className="form-group">
              <button className="btn btn-round form-btn" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </motion.div>
      <div className="meassage-confirmation"></div>
    </section>
  );
};

export default Contact;
