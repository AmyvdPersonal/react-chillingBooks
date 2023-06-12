import { Link } from "react-router-dom";
import "./UitgelichteBooksSectionMainpage.css";

const UitgelichteBooksSectionMainpage = ({ preview, alt }) => {
    return (
        <section className="Wrapper__uitgelichtebookssection">
            <section className="uitgelichtebookssection">
                <figure className="uitgelichtebookssection__figure">
                    <img src={preview} alt={alt} className="uitgelichtebookssection__image" />
                </figure>
                <section className="uitgelichtebookssection__tekstSection">
                    <h3 className="uitgelichtebookssection__header">Soms is degene van wie je houdt degene die je het meest pijn doet... 'It ends with us' is de Nederlandse editie van Colleen Hoovers internationale bestseller.</h3>
                    <p className="uitgelichtebookssection__paragraph paragrapgh1">
                        'It ends with us' is dé aangrijpende TikTok-hit van Colleen Hoover, de internationale bestsellerauteur van 'Verity' en 'Ugly love'.
                    </p>
                    <p className="uitgelichtebookssection__paragraph">

                        Lily wordt verliefd op de knappe neurochirurg Ryle. Hij is assertief, koppig en een tikje arrogant, maar ook gevoelig, briljant en dol op Lily. De opbloeiende nieuwe relatie brengt herinneringen terug aan Atlas, haar eerste liefde. Als hij weer in haar leven verschijnt, komt alles wat Lily heeft opgebouwd in gevaar. Dan komt het erop aan dat ze de kracht in zichzelf vindt om te zorgen dat de toekomst geen herhaling wordt van het verleden.
                    </p>
                    <Link to="/login" className="uitgelichtebookssection__button">Lees meer</Link>
                </section>
            </section>
        </section>
    )
}

export default UitgelichteBooksSectionMainpage;