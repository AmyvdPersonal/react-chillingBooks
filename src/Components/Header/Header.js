import { Link } from "react-router-dom";

import "./Header.css";

import headerImage from "../../img/HeaderImages/headerbookImage.jpg";

const Header = ({ image, title, paragraph }) => {
    return (
        <header className="homepage__header">
            <figure className="homepage__header__figure">
                <img src={image || headerImage}
                    alt="a yellow-book-with-a-white-background-and-sunglasses-with-flowers"
                    className="homepage__header__image"
                />
            </figure>
            <section className="homepage__header__section">
                <h2 className="homepage__header__title">{title}</h2>
                <p className="homepage__header__paragraph">{paragraph}</p>
            	<Link to="/aanmelden" className="homepage__header__button">Meld je nu aan</Link>
            </section>
        </header>
    )
}

export default Header;