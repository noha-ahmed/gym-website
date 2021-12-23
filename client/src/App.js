
import {Route } from "react-router-dom";

import Navbar from './components/Navbar';
import HomePage from "./components/Home/HomePage";
import ImageSlider from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";
import About from "./components/Home/About";
import LoginPage from "./components/Registeration/LoginPage";
import RegistrationNavBar from "./components/Registeration/RegistrationNavBar";
import SideProfile from "./components/Profile/SideProfile";

function App() {

  return (

    <div >
        <div>

      <Navbar  />
      <HomePage />
     {/* <RegistrationNavBar  /> */}
    {/* <SideProfile/> */}
        </div>
      </div>
      
      
     );
}

export default App;
