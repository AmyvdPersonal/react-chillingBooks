import Navigation from "../../Components/Navigation/Navigation";
import Loginform from "../../Components/Loginform/Loginform";
import Footer from "../../Components/Footer/Footer";

import "./Loginpage.css";

const Loginpage = () => {
    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <main>
                <section className="Wrapper__loginform">
                    <Loginform/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Loginpage;