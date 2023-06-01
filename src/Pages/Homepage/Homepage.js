/*import components*/
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";

import headerData from "../../Data/HomepageHeaderData";

import "./Homepage.css";

const Homepage = () => {
    const headerDataimage = headerData.map(headerData => {
        return <Header image={headerData.image} title={headerData.title} paragraph={headerData.paragraph} />
    })
    return (
        <section className="homepage__headerWrapper">
            <Navigation />
            {headerDataimage}
        </section>
    )

}

export default Homepage;