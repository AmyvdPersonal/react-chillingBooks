
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <section className="footer__sections">
                <section className="footer__navigation">
                    <h2 className="footer__navigation__title">Navigation</h2>
                    <ul className="footer__navigation__list">
                        <li className="footer__navigation__listItem"><Link to="/" className="footer__navigation__listItem__link">Homepage</Link></li>
                        <li className="footer__navigation__listItem"><Link to="/aboutme" className="footer__navigation__listItem__link">About</Link></li>
                        <li className="footer__navigation__listItem"><Link to="/contact" className="footer__navigation__listItem__link">Contact</Link></li>
                        <li className="footer__navigation__listItem"><Link to="/login" className="footer__navigation__listItem__link">Inloggen</Link></li>
                        <li className="footer__navigation__listItem"><Link to="/aanmelden" className="footer__navigation__listItem__link">Aanmelden</Link></li>
                    </ul>
                </section>
                <section className="footer__aanmeld">
                    <h2 className="footer__aanmeld__title">Meld je nu aan</h2>
                    <form action="" className="footer__aanmeld__form">
                        <input type="text" placeholder="Emailadress" className="footer__aanmeld__form__input"/>
                        <button className="footer__aanmeld__form__button">Submit</button>
                    </form>
                </section>
            </section>
        </footer>
    )
}

export default Footer