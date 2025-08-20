import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_wt9aw4k",
        "template_0mh4nso",
        form.current,
        "t8uciT4BW5C9SZHxh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className={`contact-container ${theme}`}>
      <h1 className={theme === "light" ? "" : "darkWrite"}>
        {language === "fr" ? "Contactez moi" : "Contact me"}
      </h1>
      <div className="contact-card">
        <h2 className={theme === "light" ? "" : "darkWrite"}>
          {language === "fr"
            ? "Un petit message pour en savoir plus ?"
            : "A little message to find out more ?"}
        </h2>
        <div className="allContacts-container">
          <div className="contacts-box">
         <div className="img-container"></div>
         <div className="social-media-box">
          </div>   
          </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className={`label ${theme === "light" ? "" : "label-dark"}`}>
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
            <label className={`label ${theme === "light" ? "" : "label-dark"}`}>
              Email
            </label>
            <input
              className={`input ${theme === "light" ? "" : "input-dark"}`}
              type="email"
              name="user_email"
              placeholder={
                language === "fr" ? "Votre adresse email" : "Your email address"
              }
              required
            />
          </div>
          <div>
            <label className={`label ${theme === "light" ? "" : "label-dark"}`}>
              Message
            </label>
            <textarea
              className={`textarea ${theme === "light" ? "" : "textarea-dark"}`}
              name="message"
              placeholder={language === "fr" ? "Votre message" : "Your message"}
              required
            ></textarea>
          </div>
          <button
            className={` ${theme === "light" ? "" : "btnDark"}`}
            type="submit"
          >
            {language === "fr" ? "Envoyez" : "Send"}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
