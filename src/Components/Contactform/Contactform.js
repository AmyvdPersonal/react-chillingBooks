import { Link } from "react-router-dom";
import "./Contactform.css";

const Contactform = () => {
    return (
        <>
            <section className="ContactForm">
                <section className="ContactForm__header">
                    <h1 className="ContactForm__header__title">Contact form</h1>
                </section>
                <form className="ContactForm__formulier">
                    <input type="text" placeholder="Voornaam" name="voornaam" id="voornaam" className="ContactForm__formulier__input"/>
                    <input type="text" placeholder="Achternaam" name="achternaam" id="achternaam" className="ContactForm__formulier__input"/>
                    <input type="text" placeholder="Email-Adress" name="emailadress" id="emailadress" className="ContactForm__formulier__input"/>
                    <input type="text" placeholder="TelefoonNummer" name="telefoonnummer" id="telefoonnummer" className="ContactForm__formulier__input"/>
                    <input type="text" placeholder="Message" name="message" id="message" className="ContactForm__formulier__input"/>
                    <button type="submit" className="ContactForm__formulier__button"><Link className="ContactForm__formulier__button__link">Verzenden</Link></button>
                </form>
            </section>
        </>
    )
}

export default Contactform;