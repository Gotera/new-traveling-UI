import React from "react";
import TruckImage1 from "../../assets/Home/TruckImage1.jpg";
import { HomePageWrapper } from "./HomePage.styled";

function HomePage() {
  return (
    <>
      <HomePageWrapper>
        <p>Home Page</p>
        <img src={TruckImage1} />
      </HomePageWrapper>
    </>
  );
}

export default HomePage;
