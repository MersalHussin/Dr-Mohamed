import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./landing.css";
import Landing from "./Landing";

// import ReactLenis from "lenis/react";

const App = () => {
  
  return (
    
    <>
    {/* <ReactLenis root> */}
    <a className="whatsapp-btn" target="_blank" href="https://icancoachyou.online/en/coaches/mohamed-1749843538151">
    <i  className="fa-solid fa-calendar-day"></i>
    </a>
      {/* Start Navbar */}
    <Navbar />
      {/* End Navbar */}
    <div className="container-page" >
      <Landing />
    </div>
    {/* </ReactLenis> */}
</>

  );
};

export default App;
