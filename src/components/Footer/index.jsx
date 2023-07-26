import React from "react";
import {
  FooterWrapper,
  ImgVertical,
  ColumnWrapper,
} from "components/Footer/Footer.style";
import VerticalColumn from "components/Footer/components/VerticalColumn";
import BlueLogo3 from "assets/Home/BlueLogo3.png";

function Footer() {
  return (
    <FooterWrapper>
      <ImgVertical>
        <img src={BlueLogo3} alt="New Traveling Logo Type 3" id="BlueLogo" />
      </ImgVertical>
      <ColumnWrapper>
        <VerticalColumn
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
        <VerticalColumn
          items={[
            ["Recursos"],
            ["Como Iniciar"],
            ["Documentos"],
            ["Suporte"],
            ["Suporte de Hardware"],
          ]}
        />
        <VerticalColumn
          items={[["Social"], ["Twitter"], ["Instagram"], ["Whatsapp"]]}
        />
        <VerticalColumn
          items={[["Empresarial"], ["Sobre Nós"], ["Blog"], ["Parceiros"]]}
        />
        <VerticalColumn
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
