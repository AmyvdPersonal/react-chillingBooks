import Navigation from "../../Components/Navigation/Navigation";
import Contactform from "../../Components/Contactform/Contactform";
import Footer from "../../Components/Footer/Footer";


import "./Contactpage.css";

const Contactpage = () => {
    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <main>
                <section className="Wrapper__contactform">
                    <Contactform/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Contactpage;