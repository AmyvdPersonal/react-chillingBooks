/*import components*/
import LeftNavigationbarDashboard from "../../Components/LeftNavigationbarDashboard/LeftNavigationbarDashboard";
import RightPanelMainpageDashboard from "../../Components/RightPanelMainpageDashboard/RightPanelMainpageDashboard";

import "./Dashboard.css";

const Dashboard = () => {
    return(
        <>
        <section className="dashboard">
            <section className="dashboard__Wrapper__LeftNavigationbarDashboard">
                <LeftNavigationbarDashboard/>
            </section>
            <section className="dashboard__Wrapper__RightPanelDashboard">
                <RightPanelMainpageDashboard/>
            </section>
        </section>
        </>
    )
}

export default Dashboard;