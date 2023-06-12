import "./AanmeldSectionHomepage.css";

const AanmeldSectionHomepage = () => {
    return(
        <section className="aanmeldsectionhomepage">
            <section className="aanmeldsectionhomepage__header">
                <h3 className="aanmeldsectionhomepage__header__title">
                    Aanmelden
                </h3>
                <p className="aanmeldsectionhomepage__header__paragraph">Wil jij lid worden van onze geweldig nieuw boeken platform. Meld je nu aan via je email-adress</p>
            </section >
            <form className="aanmeldsectionhomepage__form">   
                <input id="aanmelden" name="aanmelden" placeholder="Emailadress" className="aanmeldsectionhomepage__form__input"></input>
                <button className="aanmeldsectionhomepage__form__SubmitButton" >Submit</button>
            </form>
        </section>
    )
}

export default AanmeldSectionHomepage;