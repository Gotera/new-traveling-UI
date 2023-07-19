import React from "react";
import BlueLogo from "../../assets/Home/BlueLogo.png";
import {
  AboutWrapper,
  Apresentation,
  BannerHolder,
  BannerTextWrapper,
  HomePageWrapper,
  ProductWrapper,
  SubTittle,
} from "./HomePage.styled";
import { ProductCellWrapper } from "./components/ProductCell/ProductCell.styled";
import { BsDatabaseFillLock } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <HomePageWrapper>
        <BannerHolder>
          <BannerTextWrapper>
            <p>Na rota do progresso</p>
            <p>Em direção ao sucesso</p>
            <p>Entregas sem preocupações</p>
            <p>Só na</p>
            <img src={BlueLogo} id="BlueLogo" />
          </BannerTextWrapper>
        </BannerHolder>
        <AboutWrapper>
          <SubTittle data-aos="fade-up">Sobre Nós</SubTittle>
          <Apresentation>
            <img src={BlueLogo} id="BlueLogo" data-aos="fade-right" />
            <p data-aos="fade-left">
              {" "}
              Nosso compromisso é registrar meticulosamente os dados de suas
              viagens, cuidando de suas contas suas, proporcionando uma gestão
              eficiente de rotas, lucros e gastos. Com a New Travels, você pode
              focar na estrada, enquanto nós cuidamos do resto.
            </p>
          </Apresentation>
          <ProductWrapper>
            <SubTittle data-aos="fade-right">Produto</SubTittle>
            <ProductCellWrapper name="teste" />
          </ProductWrapper>
        </AboutWrapper>
      </HomePageWrapper>
    </>
  );
}

export default HomePage;
