import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";
import SectionHeadline from "../Utility/SectionHeadline";

const Contact = ({ sectionRevealVariants }) => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userName, setUserName] = useState("");

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
          setShowConfirmation(true); // Show confirmation popup
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  const handleModalClose = () => {
    setShowConfirmation(false);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value); // Update the userName state as the user types
  };
  const capitalizeFirstWord = (name) => {
    const firstWord = name.trim().split(" ")[0]; // Get the first word
    return firstWord.charAt(0).toUpperCase() + firstWord.slice(1); // Capitalize the first letter
  };

  return (
    <section id="let-s-connect" className="section--4">
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
          <p className="bodytext">
            – This is the first step toward something exceptional. <br></br>
            Let’s explore your vision, align your goals, and bring your project
            to life together!
          </p>
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
              onChange={handleNameChange} // Capture name input changes
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

      {/* Confirmation Modal  */}
      {showConfirmation && (
        <div className="message-confirmation" onClick={handleModalClose}>
          <div
            className="confirmation-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="confirmation-title">Your Message has been Sent!</p>
            <p className="bodytext">
              Thank you <i>{capitalizeFirstWord(userName)}</i> for reaching out.
              I’ll be in touch with you shortly...
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
