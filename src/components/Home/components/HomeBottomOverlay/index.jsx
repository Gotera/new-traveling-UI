import React from "react";
import {
  HomeBottomOverlayWrapper,
  ContentWrapper,
} from "components/Home/components/HomeBottomOverlay/HomeBottomOverlay.style";
import {
  ColumLi,
  ColumUl,
} from "../../../Footer/components/VerticalColumn/VerticalColumn.style";

function HomeBottomOverlay() {
  return (
    <HomeBottomOverlayWrapper>
      <ContentWrapper>
        <ColumUl>
          <ColumLi>Teste</ColumLi>
          <ColumLi>Teste</ColumLi>
        </ColumUl>
      </ContentWrapper>
    </HomeBottomOverlayWrapper>
  );
}

export default HomeBottomOverlay;
