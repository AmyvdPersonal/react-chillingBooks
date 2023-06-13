import { Link } from "react-router-dom";
import "./Registreerform.css";

const Registreerform = () => {
    return (
        <>
            <section className="RegisteerForm">
                <section className="RegisteerForm__header">
                    <h1 className="RegisteerForm__header__title">Registreer form</h1>
                </section>
                <form className="RegisteerForm__formulier">
                    <input type="text" placeholder="Voornaam" name="voornaam" id="voornaam" className="RegisteerForm__formulier__input" />
                    <input type="text" placeholder="Achternaam" name="achternaam" id="achternaam" className="RegisteerForm__formulier__input" />
                    <input type="text" placeholder="Email-Adress" name="emailadress" id="emailadress" className="RegisteerForm__formulier__input" />
                    <input type="text" placeholder="Wachtwoord" name="wachtwoord" id="wachtwoord" className="RegisteerForm__formulier__input" />
                    <input type="text" placeholder="confirm Wachtwoord" name="confirmwachtwoord" id="confirmwachtwoord" className="RegisteerForm__formulier__input" />
                    <button type="submit" className="RegistreerForm__formulier__button"><Link to="/login" className="RegisteerForm__formulier__button__link">Verzenden</Link></button>
                </form>
            </section>
        </>
    )
}

export default Registreerform;