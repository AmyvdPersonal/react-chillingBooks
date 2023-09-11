/* import components */
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import Registreerform from "../../Components/Registreerform/Registreerform";

import "./Registerpage.css";

const RegisterPage = () => {
    return(
        <>
            <nav>
                <Navigation/>
            </nav>
            <main>
                <section className="Wrapper__Registerform">
                <Registreerform/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default RegisterPage;