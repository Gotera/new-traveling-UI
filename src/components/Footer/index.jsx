import React from "react";
import {
  ColumLi,
  ColumUl,
  ColumnWrapper,
  FooterWrapper,
  MiddleToLeft,
  MiddleToRight,
  SidesWrapper,
} from "./Footer.style";
import BlueLogo3 from "assets/Home/BlueLogo3.png";

function Footer() {
  return (
    <FooterWrapper>
      <img src={BlueLogo3} id="BlueLogo" />
      <ColumnWrapper>
        <ColumUl>
          <ColumLi>Social</ColumLi>
          <ColumLi>Instagram</ColumLi>
          <ColumLi>Twitter</ColumLi>
          <ColumLi>Whatsapp</ColumLi>
        </ColumUl>
        <ColumUl>
          <ColumLi>Social</ColumLi>
          <ColumLi>Instagram</ColumLi>
          <ColumLi>Twitter</ColumLi>
          <ColumLi>Whatsapp</ColumLi>
        </ColumUl>
        <ColumUl>
          <ColumLi>Social</ColumLi>
          <ColumLi>Instagram</ColumLi>
          <ColumLi>Twitter</ColumLi>
          <ColumLi>Whatsapp</ColumLi>
        </ColumUl>
        <ColumUl>
          <ColumLi>Social</ColumLi>
          <ColumLi>Instagram</ColumLi>
          <ColumLi>Twitter</ColumLi>
          <ColumLi>Whatsapp</ColumLi>
        </ColumUl>
        <ColumUl>
          <ColumLi>Social</ColumLi>
          <ColumLi>Instagram</ColumLi>
          <ColumLi>Twitter</ColumLi>
          <ColumLi>Whatsapp</ColumLi>
        </ColumUl>
      </ColumnWrapper>
    </FooterWrapper>
  );
}

export default Footer;
