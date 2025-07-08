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
      <h1>Contactez moi</h1>
      <div className="contact-card">
        <h2>Un petit message pour en savoir plus ?</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Nom</label>
            <input
              type="text"
              name="user_name"
              placeholder="votre nom"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="votre adresse mail"
              required
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="votre message"
              required
            ></textarea>
          </div>
          <button type="submit">Envoyez</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
