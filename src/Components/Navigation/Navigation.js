import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Navigation.css";

const Navigation = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <header className="header__navigation">
            <h3>ChillingBooks</h3>
            <nav ref={navRef} className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__ListItem"><Link to="/" className="navigation__ListItem__Link">Home</Link></li>
                    <li className="navigation__ListItem"><Link to="/aboutme" className="navigation__ListItem__Link">About</Link></li>
                    <li className="navigation__ListItem"><Link to="/contact" className="navigation__ListItem__Link">Contact</Link></li>
                    <li className="navigation__ListItem"><Link to="/login" className="navigation__ListItem__Link">Login</Link></li>
                    <li className="navigation__ListItem"><Link to="/aanmelden" className="navigation__ListItem__Link">Aanmelden</Link></li>
                </ul>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
   
}

export default Navigation;