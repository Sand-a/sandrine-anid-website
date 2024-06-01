import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
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
    <div id="contact" className="section section--4 container section-contact">
      <div className="contact-headline">
        <h1 className="primary-headline contact-headline-1">
          Let’s get in Touch
        </h1>
        <h1 className="primary-headline contact-headline contact-headline-2">
          Drop me a Line !
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label for="name" className="bodytext">
            Your Name
          </label>
          <input
            className="searchfield"
            type="text"
            placeholder="name"
            name="user_name"
            required
          />
        </div>
        <div className="form-group">
          <label for="email" className="bodytext">
            Your email
          </label>
          <input
            className="searchfield"
            type="text"
            placeholder="Email"
            name="user_email"
            required
          />
        </div>
        <div className="form-group">
          <label for="message" className="bodytext">
            Your message
          </label>
          <textarea
            className="searchfield"
            type="text"
            name="user_message"
            cols="30"
            rows="10"
          ></textarea>
          <div className="form-group">
            <button className="btn form-btn" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
