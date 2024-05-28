import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="section section--4 container section-contact">
      <h1 className="primary-headline contact-headline contact-headline-1">
        Let’s get in Touch
      </h1>
      <h1 className="primary-headline contact-headline contact-headline-2">
        Drop me a Line !
      </h1>
      <form className="contact-form">
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
            placeholder="email"
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
