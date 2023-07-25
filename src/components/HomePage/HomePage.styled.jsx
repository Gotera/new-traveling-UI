import styled from "styled-components";
import { colors } from "App.style";
import TruckImage1 from "assets/Home/TruckImage1.jpg";

export const HomePageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`;

export const BannerHolder = styled.div`
  height: calc(100vh - 100px);
  color: ${colors.white};
  font-size: 2rem;
  letter-spacing: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  background-color: ${colors.babyBlue};
  background-image: url(${TruckImage1});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    background-position: center;
    font-weight: 400;
  }
`;

export const BannerTextWrapper = styled.div`
  margin: calc(50vh - 100px) 6%;
  flex-wrap: wrap;
  text-shadow: 10rem solid ${colors.dark};

  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  background-color: ${colors.babyBlue};
  padding: 0 5% 0 5%;
`;

export const SubTittle = styled.h2`
  font-size: 4rem;
  margin: 2rem;
  font-family: "Poppins", sans-serif;
  color: ${colors.white};

  @media (max-width: 450px) {
    font-size: 3rem;
  }
`;

export const Apresentation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  align-items: center;
  width: 0 auto;
  text-indent: 5em;
  gap: 4rem;

  p {
    width: 50%;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1.8px;
    text-align: start;
    color: ${colors.white};
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    width: 80% auto;

    p {
      width: 100%;
      order: 1;
      text-indent: 1em;
    }

    img {
      order: 2;
    }
  }
`;

export const ProductWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 5% 5% 5%;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const DisplayMany = styled.div`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
