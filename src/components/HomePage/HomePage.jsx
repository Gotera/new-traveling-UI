import React from "react";
import TruckImage1 from "../../assets/Home/TruckImage1.jpg";
import BlueLogo from "../../assets/Home/BlueLogo.png";
import {
  AboutWrapper,
  Apresentation,
  HomePageWrapper,
  ProductWrapper,
  SubTittle,
} from "./HomePage.styled";
import { ProductCellWrapper } from "./components/ProductCell/ProductCell.styled";
import { BsDatabaseFillLock } from "react-icons/bs";
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
          <ProductWrapper>
            <SubTittle>Produto</SubTittle>
            <ProductCellWrapper  name="teste" />
          </ProductWrapper>
        </AboutWrapper>
      </HomePageWrapper>
    </>
  );
}

export default HomePage;
