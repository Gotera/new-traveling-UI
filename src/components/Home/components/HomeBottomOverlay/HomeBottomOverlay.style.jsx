import styled from "styled-components";
import { colors } from "App.style";
import {
  ColumLi,
  ColumUl,
} from "components/Footer/components/VerticalColumn/VerticalColumn.style";

export const HomeBottomOverlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  height: 10rem;
  position: absolute;
  border-radius: 0.5rem;
  color: ${colors.white};
  font-size: 2rem;
  letter-spacing: 0.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgb(0, 251, 255);
  background: radial-gradient(
    circle,
    rgba(0, 251, 255, 1) 0%,
    rgba(42, 98, 197, 1) 0%,
    rgba(27, 81, 221, 1) 54%,
    rgba(6, 78, 167, 1) 76%
  );
  /* background: rgb(110, 105, 196);
  background: radial-gradient(
    circle,
    rgba(110, 105, 196, 1) 0%,
    rgba(27, 81, 221, 1) 37%,
    rgba(6, 78, 167, 1) 71%,
    rgba(42, 98, 197, 1) 100%
  ); */
  ${ColumUl} {
    justify-content: center;
    &:nth-child(1) {
      margin-left: 5%;
    }
    &:nth-child(2) {
      margin-right: 5%;
    }
  }

  ${ColumLi} {
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    &:first-child {
      margin-bottom: 0;
    }

    &:nth-child(1) {
      font-size: 1.5rem;
      color: ${colors.white};
    }

    &:nth-child(2) {
      letter-spacing: 0.2rem;
      margin-bottom: 0;
    }
    
    p {
      display: flex;
      align-items: center;
      &:hover {
        color: ${colors.neonGreen};
        cursor: pointer;
      }
    }
    &:hover {
      color: ${colors.white};
    }
  }
`;
