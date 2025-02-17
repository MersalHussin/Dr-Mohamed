import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./landing.css";
import "./pages/Blogs/Blog.css";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2";
import Blog3 from "./pages/Blogs/Blog3";
import Library from "./pages/Library";
// import ReactLenis from "lenis/react";

const App = () => {
  
  return (
    
    <>
    {/* <ReactLenis root> */}
    <a className="whatsapp-btn" target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">
    <i className="fa-brands fa-whatsapp"></i>
    </a>
      {/* Start Navbar */}
    <Navbar />
      {/* End Navbar */}
    <div className="container-page" >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
    {/* </ReactLenis> */}
</>

  );
};

export default App;
