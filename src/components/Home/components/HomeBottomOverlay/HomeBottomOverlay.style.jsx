import styled from "styled-components";
import { colors } from "App.style";

export const HomeBottomOverlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  height: 10rem;
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  color: ${colors.white};
  font-size: 2rem;
  letter-spacing: 0.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
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
`;
