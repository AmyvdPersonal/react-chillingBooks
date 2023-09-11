import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Import pages*/
import Homepage from "../Pages/Homepage/Homepage";
import Aboutmepage from "../Pages/aboutme/Aboutme";
import Contactpage from "../Pages/contact/Contactpage";
import Loginpage from "../Pages/login/Loginpage";
import Registerpage from "../Pages/Registerpage/Registerpage";

/* import dashboard */
import Dashboard from "../Pages/Dashboard/Dashboard";

/*import dashboard pages*/
import Boekenkastpage from "../Pages/Boekenkast/Boekenkast";
import Chatpage from "../Pages/Chat/Chat";
import Friendspage from "../Pages/Friends/Friends";
import Logoutpage from "../Pages/Logout/Logout";
import Notificationspage from "../Pages/Notifications/Notifications";
import Profilepage from "../Pages/Profile/Profile";
import Searchpage from "../Pages/Search/Search";
import Servicepage from "../Pages/Service/Service";
import Settingspage from "../Pages/Settings/Settings";
import Supportpage from "../Pages/Support/Support";
import Weatherpage from "../Pages/Weather/Weather";

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/aboutme" element={<Aboutmepage/>}/>
          <Route path="/contact" element={<Contactpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/aanmelden" element={<Registerpage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/boekenkast" element={<Boekenkastpage/>}/>
          <Route path="/chat" element={<Chatpage/>}/>
          <Route path="/friends" element={<Friendspage/>}/>
          <Route path="/logout" element={<Logoutpage/>}/>
          <Route path="/notifications" element={<Notificationspage/>}/>
          <Route path="/profile" element={<Profilepage/>}/>
          <Route path="/search" element={<Searchpage/>}/>
          <Route path="/service" element={<Servicepage/>}/>
          <Route path="/settings" element={<Settingspage/>}/>
          <Route path="/support" element={<Supportpage/>}/>
          <Route path="/weather" element={<Weatherpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
