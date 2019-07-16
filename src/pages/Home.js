import React from "react";
import Nav from "../components/Nav";
import HomeBody from "../components/HomeBody";

const Home = () => {
  const userId = 0;

  return (
    <div>
      <Nav />
      <HomeBody userId={userId} />
    </div>
  );
};

export default Home;
