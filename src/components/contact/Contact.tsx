import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Function to send the email using EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return; // Prevent sending if form reference is missing
    emailjs
      .sendForm(
        "service_hmzbkuw", // EmailJS service ID
        "template_0mh4nso", // EmailJS template ID
        form.current, // The form reference
        "t8uciT4BW5C9SZHxh" // Public API key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset(); // Clear the form after submission
  };

  return (
    <div className={`contact-container ${theme}`}>
      <motion.h1
        className={theme === "light" ? "" : "darkWrite"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {language === "fr" ? "Contactez moi" : "Contact me"}
      </motion.h1>
      <div className="contact-card">
        <motion.h2
          className={theme === "light" ? "" : "darkWrite"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          {language === "fr"
            ? "Un petit message pour en savoir plus ?"
            : "A little message to find out more ?"}
        </motion.h2>
        <div className="allContacts-container">
          <motion.div
            className="contacts-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <div
              className={` social-media-box ${
                theme === "light" ? "" : "social-media-box-dark"
              }`}
            >
              <a href="https://www.linkedin.com/in/david-chazoule/">
                <FaLinkedin
                  className={`icon-social ${
                    theme === "light" ? "" : "icon-dark"
                  }`}
                />
              </a>
              <a href="https://github.com/David-Chazoule">
                <FaGithub
                  className={`icon-social ${
                    theme === "light" ? "" : "icon-dark"
                  }`}
                />
              </a>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <div>
              <label
                className={`label ${theme === "light" ? "" : "label-dark"}`}
              >
                {language === "fr" ? "Nom" : "Name"}
              </label>
              <input
                className={`input ${theme === "light" ? "" : "input-dark"}`}
                type="text"
                name="user_name"
                placeholder={language === "fr" ? "Votre nom" : "Your name"}
                required
              />
            </div>
            <div>
              <label
                className={`label ${theme === "light" ? "" : "label-dark"}`}
              >
                Email
              </label>
              <input
                className={`input ${theme === "light" ? "" : "input-dark"}`}
                type="email"
                name="user_email"
                placeholder={
                  language === "fr"
                    ? "Votre adresse email"
                    : "Your email address"
                }
                required
              />
            </div>
            <div>
              <label
                className={`label ${theme === "light" ? "" : "label-dark"}`}
              >
                Message
              </label>
              <textarea
                className={`textarea ${
                  theme === "light" ? "" : "textarea-dark"
                }`}
                name="message"
                placeholder={
                  language === "fr" ? "Votre message" : "Your message"
                }
                required
              ></textarea>
            </div>
            <button
              className={` ${theme === "light" ? "" : "btnDark"}`}
              type="submit"
            >
              {language === "fr" ? "Envoyez" : "Send"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
