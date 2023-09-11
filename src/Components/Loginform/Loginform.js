import { Link } from "react-router-dom";
import "./Loginform.css";

const Loginform = () => {
    return (
        <>
            <section className="LoginForm">
                <section className="LoginForm__header">
                    <h1 className="LoginForm__header__title">Login form</h1>
                </section>
                <form className="LoginForm__formulier">
                    <input type="text" placeholder="Email-Adress" name="emailadress" id="emailadress" className="LoginForm__formulier__input"/>
                    <input type="text" placeholder="Wachtwoord" name="wachtwoord" id="wachtwoord" className="LoginForm__formulier__input"/>
                    <button type="submit" className="LoginForm__formulier__button"><Link to="/dashboard" className="LoginForm__formulier__button__link">Verzenden</Link></button>
                </form>
            </section>
        </>
    )
}

export default Loginform;