import { Link } from "react-router-dom";

import "./PreviewBooksSectionAboutpage.css";

import PreviewBooksSectionAboutpageImage1 from "../../img/bookImages/itendswithusbookcover.jpg";
import PreviewBooksSectionAboutpageImage2 from "../../img/bookImages/itstartswithus.jpg";
import PreviewBooksSectionAboutpageImage3 from "../../img/bookImages/eentijdlozeliefdecover.jpg";


const PreviewBooksSectionAboutpage = () => {
    return(
        <>
        <section className="PreviewBooksSection">
            <section className="PreviewBooksSection__books">
                <Link to="'/dashboard"><img src={PreviewBooksSectionAboutpageImage1} alt="it-ends-with-us=book-cover" className="PreviewBooksSection__book__image PreviewBooksSection__book"/></Link>
                <Link to="'/dashboard"><img src={PreviewBooksSectionAboutpageImage2} alt="it-starts-with-us-book-cover" className="PreviewBooksSection__book__image PreviewBooksSection__book"/></Link>
                <Link to="'/dashboard"><img src={PreviewBooksSectionAboutpageImage3} alt="een-tijdloze-liefde-cover" className="PreviewBooksSection__book__image PreviewBooksSection__book"/></Link>
            </section>
        </section>
        </>
    );
}

export default PreviewBooksSectionAboutpage;