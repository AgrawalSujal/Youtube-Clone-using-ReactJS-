import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayVideo from "./Components/PlayVideo/PlayVideo";
import Video from "./Components/Video/Video";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
