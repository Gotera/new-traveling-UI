import React from "react";
import {
  HomeBottomOverlayWrapper,
  ContentWrapper,
} from "components/Home/components/HomeBottomOverlay/HomeBottomOverlay.style";
import {
  ColumLi,
  ColumUl,
} from "components/Footer/components/VerticalColumn/VerticalColumn.style";
import { BiCheck } from "react-icons/bi";
import DarkTechButton from "components/Buttons/Tech/DarkTechButton";
import WhiteTechButton from "components/Buttons/Tech/WhiteTechButton";

function HomeBottomOverlay() {
  return (
    <HomeBottomOverlayWrapper>
      <ContentWrapper>
        <ColumUl>
          <ColumLi>Registre uma viajem hoje</ColumLi>
          <ColumLi>
            <p>
              <BiCheck size={20} />
              Teste Grátis
            </p>
            <p>
              <BiCheck size={20} />
              Login
            </p>
            <p>
              <BiCheck size={20} />
              Conta Analítica
            </p>
          </ColumLi>
        </ColumUl>
        <ColumUl>
          <ColumLi id="teste">
            <DarkTechButton displayText="Registre-se" />
            <WhiteTechButton displayText="Login" />
          </ColumLi>
        </ColumUl>
      </ContentWrapper>
    </HomeBottomOverlayWrapper>
  );
}

export default HomeBottomOverlay;
