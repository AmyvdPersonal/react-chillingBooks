import "./AboutsectionAboutpage.css";

const AboutmeSectionAboutpage = ({aboutImageHeader, aboutTitleHeader, aboutParagraphHeader}) => {
    return (
        <section className="AboutmeSection__Header__wrapper">
            <section className="AboutmeSection__Header">
                <section className="AboutmeSection__Header__sectionImage">
                    <figure className="AboutmeSection__Header__figure">
                        <img src={aboutImageHeader} alt="" className="AboutmeSection__Header__image"/>
                    </figure>
                </section>
                <section className="AboutmeSection__Header__textsection">
                    <h1 className="AboutmeSection__Header__textsection__Title">{aboutTitleHeader}</h1>
                    <p className="AboutmeSection__Header__textsection__Paragraph">{aboutParagraphHeader}</p>
                </section>
            </section>
        </section>
    )
}

export default AboutmeSectionAboutpage;