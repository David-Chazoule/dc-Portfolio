import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return <div className={`contact-container ${theme}`}>
  <h1>Contactez moi</h1>
  <div className="contact-card">
   <form>
    <input type="text" name="user_name" placeholder="votre nom"/>
    <input type="email" name="user_email" placeholder="votre adresse mail"/>
   <textarea name="message" placeholder="votre message"></textarea>
   <button type="submit">Envoyez</button>


   </form>


  </div>





  </div>;
}

export default Contact;
