import styled from "styled-components";
import { colors } from "App.style";

export const FooterWrapper = styled.div`
  background-color: ${colors.darkBlue};
  padding: 12% 5% 5% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImgVertical = styled.div`
  padding: 0 0% 2.5% 5%;
  width: 100%;
  max-width: 1920px;  
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    padding: 0 0% 5% 0;
  }
  @media (max-width: 300px) {
    img {
      display: none;
    }
  }
`;

export const ColumnWrapper = styled.div`
  max-width: 1920px;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5%;
  @media (max-width: 630px) {
    padding: 0;
    flex-wrap: wrap;
  }
`;
