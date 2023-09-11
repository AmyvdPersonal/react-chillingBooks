import { Link } from "react-router-dom";

import "./NavigationListitemLeftNavigationbarDashboard.css"

/*import images */
import LibraryImage from "../../img/Dashboard images/library.png";
import SearchImage from "../../img/Dashboard images/search.png";
import FriendsImage from "../../img/Dashboard images/friends.png";
import chatImage from "../../img/Dashboard images/chat.png";

const NavigationListitemRightNavigationbarDashboard = () => {
    return (
        <>
            <nav className="navigationlistitemdashboardmainpage">
                <ul className="navigationlistitemdashboardmainpage__list">
                    <li className="navigationlistitemdashboardmainpage__listItem">
                        <figure className="navigationlistitemdashboardmainpage__figure">
                            <Link to="/boekenkast" className="navigationlistitemdashboardmainpage__figure__Link">
                                <img className="navigationlistitemdashboardmainpage__listItem__figure__image navigationlistitemdashboardmainpage__listItem__image__library" src={LibraryImage} alt=""/>
                            </Link>
                        </figure>
                        <Link to="/boekenkast" className="navigationlistitemdashboardmainpage__listItem__linktext">Library</Link>
                    </li>

                    <li className="navigationlistitemdashboardmainpage__listItem">
                        <figure className="navigationlistitemdashboardmainpage__figure">
                            <Link to="/search" className="navigationlistitemdashboardmainpage__figure__Link">
                                <img className="navigationlistitemdashboardmainpage__listItem__figure__image navigationlistitemdashboardmainpage__listItem__image__search" src={SearchImage} alt=""/>
                            </Link>
                        </figure>
                        <Link to="/search" className="navigationlistitemdashboardmainpage__listItem__linktext">Search</Link>
                    </li>

                    <li className="navigationlistitemdashboardmainpage__listItem">
                        <figure className="navigationlistitemdashboardmainpage__figure">
                            <Link to="/friends" className="navigationlistitemdashboardmainpage__figure__Link">
                                <img className="navigationlistitemdashboardmainpage__listItem__figure__image navigationlistitemdashboardmainpage__listItem__image__friends" src={FriendsImage} alt=""/>
                            </Link>
                        </figure>
                        <Link to="/friends" className="navigationlistitemdashboardmainpage__listItem__linktext">Friends</Link>
                    </li>

                    <li className="navigationlistitemdashboardmainpage__listItem">
                        <figure className="navigationlistitemdashboardmainpage__figure">
                            <Link to="/chat" className="navigationlistitemdashboardmainpage__figure__Link">
                                <img className="navigationlistitemdashboardmainpage__listItem__figure__image navigationlistitemdashboardmainpage__listItem__image__chat" src={chatImage} alt=""/>
                            </Link>
                        </figure>
                        <Link to="/chat" className="navigationlistitemdashboardmainpage__listItem__linktext">Chat</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationListitemRightNavigationbarDashboard;