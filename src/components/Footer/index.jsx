import React from "react";
import {
  FooterWrapper,
  ImgHorizontal,
  ColumnWrapper,
} from "components/Footer/Footer.style";
import HorizontalColumn from "components/Footer/components/HorizontalColumn";
import BlueLogo3 from "assets/Home/BlueLogo3.png";

function Footer() {
  return (
    <FooterWrapper>
      <ImgHorizontal>
        <img src={BlueLogo3} alt="New Traveling Logo Type 3" id="BlueLogo" />
      </ImgHorizontal>
      <ColumnWrapper>
        <HorizontalColumn
          items={[
            ["Navegação"],
            ["Home", "/"],
            ["Login", "/login"],
            ["Register", "/register"],
            ["Painel de Controle", "/dashboard"],
            ["Criar Viagem", "/createTravel"],
            ["Histórico", "/history"],
          ]}
        />
        <HorizontalColumn
          items={[
            ["Recursos"],
            ["Como Iniciar"],
            ["Documentos"],
            ["Suporte"],
            ["Suporte de Hardware"],
          ]}
        />
        <HorizontalColumn
          items={[["Social"], ["Twitter"], ["Instagram"], ["Whatsapp"]]}
        />
        <HorizontalColumn
          items={[["Empresarial"], ["Sobre Nós"], ["Blog"], ["Parceiros"]]}
        />
        <HorizontalColumn
          items={[
            ["Social"],
            ["Twitter"],
            ["GitHub"],
            ["LinkedIn"],
            ["Instagram"],
            ["Whatsapp"],
          ]}
        />
      </ColumnWrapper>
    </FooterWrapper>
  );
}

export default Footer;
