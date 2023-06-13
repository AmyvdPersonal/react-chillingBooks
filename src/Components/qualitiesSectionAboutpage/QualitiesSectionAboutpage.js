import "./QualitiesSectionAboutpage.css";

const QualitiesSectionAboutpage = ({qualitiesIcon, qualitiesAlt, qualitiesDescription}) => {
    return (
        <>
            <section className="qualitiesSection__Wrapper">
                <section className="qualitiesSection">
                    <section className="qualitiesSection__imageSection">
                        <figure className="qualitiesSection__imageSection__figure">
                            <img src={qualitiesIcon} alt={qualitiesAlt} className="qualitiesSection__imageSection__image"/>
                        </figure>
                    </section>
                    <section className="qualitiesSection__paragrapghSection">
                        <p className="qualitiesSection__paragrapghSection__paragraph">{qualitiesDescription}</p>
                    </section>
                </section>
            </section>
        </>
    )
}

export default QualitiesSectionAboutpage;