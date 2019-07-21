import React from "react";
import Nav from "../components/pageComponents/Nav";
import HomeBody from "../components/pageComponents/HomeBody";

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
