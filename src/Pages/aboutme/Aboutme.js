/*import components*/
import Navigation from "../../Components/Navigation/Navigation";
import AboutsectionAboutpage from "../../Components/AboutSectionAboutpage/AboutsectionAboutpage";
import QualitiesSectionAboutpage from "../../Components/qualitiesSectionAboutpage/QualitiesSectionAboutpage";
import PreviewBooksSectionAboutpage from "../../Components/PreviewBooksSectionAcoutpage/PreviewBooksSectionAboutpage";
import AanmeldSectionHomepage from "../../Components/AanmeldSectionHomepage/AanmeldSectionHomepage";
import Footer from "../../Components/Footer/Footer";

import AboutpageHeaderData from "../../Data/AboutpageHeaderData";
import AboutQualitiesData from "../../Data/AboutpageQualitiesData";

import "./Aboutme.css";

const Aboutmepage = () => {
    const aboutmepageHeaderiamge = AboutpageHeaderData.map(aboutHeaderData => {
        return <AboutsectionAboutpage aboutImageHeader={aboutHeaderData.image} aboutTitleHeader={aboutHeaderData.aboutpageTitle} aboutParagraphHeader={aboutHeaderData.aboutpageParagraph} />
    });

    const Qualities = AboutQualitiesData.map(qualitiesData => {
        return <QualitiesSectionAboutpage qualitiesIcon={qualitiesData.QualitiesImage} qualitiesAlt={qualitiesData.alt} qualitiesDescription={qualitiesData.description} />
    })
    return (
        <>
            <nav>
                <Navigation />

            </nav>
            <main>
                {aboutmepageHeaderiamge}
                <section className="qualitiesSectionWrapper">
                    {Qualities}
                </section>
                <section className="PreviewSectionAboutpageWrapper">
                    <PreviewBooksSectionAboutpage/>
                </section>
                <AanmeldSectionHomepage/>
            </main>
            <Footer />
        </>
    )
}

export default Aboutmepage;