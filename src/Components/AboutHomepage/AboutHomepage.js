import "./AboutHomepage.css";

const AboutHomepage = ({image1, image2, image3}) => {
    return(
        <section className="abouthomepage">
            <section className="abouthomepage__imageSection">
                <figure className="abouthomepage__imageSection__figure abouthomepage__imageSection__figure__image1">
                    <img src={image1} className="abouthomepage__imageSection__image"/>
                </figure>
                <figure className="abouthomepage__imageSection__figure abouthomepage__imageSection__figure__image2">
                    <img src={image2} className="abouthomepage__imageSection__image"/>
                </figure>
                <figure className="abouthomepage__imageSection__figure abouthomepage__imageSection__figure__image3">
                    <img src={image3} className="abouthomepage__imageSection__image"/>
                </figure>
            </section>
            <section className="abouthomepage__paragrapghSection">
                <p className="abouthomepage__paragrapghSection__paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </section>
        </section>
    )
}

export default AboutHomepage;