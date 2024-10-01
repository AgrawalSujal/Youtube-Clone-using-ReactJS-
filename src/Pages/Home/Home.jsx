import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import "./Home.css";
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <div>
        <div className={`container ${sidebar}?"":large-container`}>
          <Sidebar
            sidebar={sidebar}
            category={category}
            setCategory={setCategory}
          />
          <Feed category={category} />
        </div>
      </div>
    </>
  );
};

export default Home;
