import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Import pages*/
import Homepage from "../Pages/Homepage/Homepage";
import Aboutmepage from "../Pages/aboutme/Aboutme";
import Contactpage from "../Pages/contact/Contactpage";
import Loginpage from "../Pages/login/Loginpage";
import Registerpage from "../Pages/Registerpage/Registerpage";

/* import dashboard */
import Dashboard from "../Pages/Dashboard/Dashboard";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
