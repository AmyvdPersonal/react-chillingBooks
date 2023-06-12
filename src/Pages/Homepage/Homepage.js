/*import components*/
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";
import AboutHomepage from "../../Components/AboutHomepage/AboutHomepage";
import UitgelichteBooksSectionMainpage from "../../Components/uitgelichtBooksSectionMainpage/UitgelichteBooksSectionMainpage";
import AanmeldSectionHomepage from "../../Components/AanmeldSectionHomepage/AanmeldSectionHomepage";
import headerData from "../../Data/HomepageHeaderData";

import "./Homepage.css";

/*import images 1, 5 en 7*/
import sfeerImage1 from "../../img/sfeerImages/sfeerImage1.jpg";
import sfeerImage5 from "../../img/sfeerImages/sfeerImage5.jpg";
import sfeerImage7 from "../../img/sfeerImages/sfeerImage7.jpg";

/*books preview*/
import itendswithusImage from "../../img/bookImages/itendswithusbookcover.jpg";
import Footer from "../../Components/Footer/Footer";

const Homepage = () => {
    const headerDataimage = headerData.map(headerData => {
        return <Header image={headerData.image} title={headerData.title} paragraph={headerData.paragraph} />
    })
    return (
        <main className="homepage__headerWrapper">
            <Navigation />
            {headerDataimage}

            <section className="Wrapper__AboutHomepage">
                <AboutHomepage image1={sfeerImage1} image2={sfeerImage5} image3={sfeerImage7}/>
            </section>
            <section>
                <UitgelichteBooksSectionMainpage preview={itendswithusImage} alt="book-cover-it-ends-with-us-book-pink"/>
            </section>
            <section className="Wrapper__aanmeldsectionhomepage">
                <AanmeldSectionHomepage />
            </section>

            <Footer/>
        </main>
    )

}

export default Homepage;