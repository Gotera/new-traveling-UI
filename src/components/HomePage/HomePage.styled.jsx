import styled from "styled-components";
import { colors } from "../../App.style";
import TruckImage1 from "../../assets/Home/TruckImage1.jpg";

export const HomePageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;

  /* img {
    &.TruckBanner {
      width: 100%;
      height: 40rem;
      object-fit: cover;
      bottom: 0;
      object-position: center;
    }
  } */
`;

export const BannerHolder = styled.div`
  height: calc(100vh - 100px);
  color: ${colors.white};
  font-size: 2rem;
  letter-spacing: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  background-color: ${colors.babyBlue};
  background-image: url(${TruckImage1});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const BannerTextWrapper = styled.div`
  margin: calc(50vh - 100px) 6%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.babyBlue};
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

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
