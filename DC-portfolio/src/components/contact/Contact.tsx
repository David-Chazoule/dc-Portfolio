import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const sendEmail = (e) => {
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
    e.target.reset();
  };

  return (
    <div className={`contact-container ${theme}`}>
      <h1>Contactez moi</h1>
      <div className="contact-card">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="votre nom"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="votre adresse mail"
            required
          />
          <textarea
            name="message"
            placeholder="votre message"
            required
          ></textarea>
          <button type="submit">Envoyez</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
