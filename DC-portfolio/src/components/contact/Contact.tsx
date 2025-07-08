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
      <h1>{language === "fr" ? "Contactez moi" : "Contact me"}</h1>
      <div className="contact-card">
        <h2>
          {language === "fr"
            ? "Un petit message pour en savoir plus ?"
            : "A little message to find out more ?"}
        </h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>{language === "fr" ? "Nom" : "Name"}</label>
            <input
              type="text"
              name="user_name"
              placeholder={language === "fr" ? "Votre nom" : "Your name"}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder={
                language === "fr" ? "Votre adresse email" : "Your email address"
              }
              required
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              placeholder={language === "fr" ? "Votre message" : "Your message"}
              required
            ></textarea>
          </div>
          <button type="submit">
            {language === "fr" ? "Envoyez" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
