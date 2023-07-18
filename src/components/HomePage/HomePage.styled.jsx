import styled from "styled-components";
import { colors } from "../../App.style";

export const HomePageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  background-color: ${colors.babyBlue};
  img {
    &.TruckBanner {
      width: 100%;
      height: 40rem;
      object-fit: cover;
      bottom: 0;
      object-position: center;
    }
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SubTittle = styled.h2`
  font-size: 4rem;
  margin: 2rem;
  font-family: "Poppins", sans-serif;
  color: ${colors.white};
`;

export const Apresentation = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  align-items: center;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1.8px;
    text-align: start;
    color: ${colors.white};
  }
`;
