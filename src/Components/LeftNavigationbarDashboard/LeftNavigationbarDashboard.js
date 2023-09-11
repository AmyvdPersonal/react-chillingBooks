import { Link } from "react-router-dom";

import NavigationListitemLeftNavigationbarDashboard from "../NavigationListitemLeftNavigationbarDashboard/NavigationListitemLeftNavigationDashboard";

import Profileimage from "../../img/Dashboard images/profile.png";

import "./LeftNavigationbarDashboard.css";

const LeftNavigationbarDashboard = () => {
    return (
        <section className="leftnavigationbardashboard">
            <section className="leftnavigationbardashboard__profile">
                <figure className="leftnavigationbardashboard__profile__figure">
                    <Link to="/profile" className="leftnavigationbardashboard__profile__figure__Link">
                        <img src={Profileimage} alt="image-profile-image"  className="leftnavigationbardashboard__profile__image"/>
                    </Link>
                </figure>
                <Link to="/profile" className="leftnavigationbardashboard__profile__linkText">Profile</Link>
            </section>
            <section className="leftnavigationbardashboard__Wrapper__navigationbar">
                <NavigationListitemLeftNavigationbarDashboard/>
            </section>
            <section className="leftnavigationbardashboard__Wrapper__">
                
            </section>
        </section>
    );
}

export default LeftNavigationbarDashboard;