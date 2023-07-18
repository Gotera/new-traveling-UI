import React from "react";
import TruckImage1 from "../../assets/Home/TruckImage1.jpg";
import BlueLogo from "../../assets/Home/BlueLogo.png";
import {
  AboutWrapper,
  Apresentation,
  HomePageWrapper,
  SubTittle,
} from "./HomePage.styled";

function HomePage() {
  return (
    <>
      <HomePageWrapper>
        <img src={TruckImage1} className="TruckBanner" />
        <AboutWrapper>
          <SubTittle>Sobre Nós</SubTittle>
          <Apresentation>
            <img src={BlueLogo} id="BlueLogo" />
            <p>
              {" "}
              Nosso compromisso é registrar meticulosamente os dados de suas
              viagens, cuidando de suas contas suas, proporcionando uma gestão
              eficiente de rotas, lucros e gastos. Com a New Travels, você pode
              focar na estrada, enquanto nós cuidamos do resto.
            </p>
          </Apresentation>
        </AboutWrapper>
      </HomePageWrapper>
    </>
  );
}

export default HomePage;
