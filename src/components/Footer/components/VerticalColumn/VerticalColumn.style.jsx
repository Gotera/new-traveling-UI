import styled from "styled-components";
import { colors } from "App.style";

export const VerticalColumnsWrapper = styled.div`
  margin: 8px 8px 0 8px;
  max-width: 1920px;
`;

export const ColumLi = styled.li`
  font-family: "Poppins", sans-serif;
  color: ${colors.white};
  font-weight: 500;
  &:first-child {
    margin-bottom: 1rem;
    font-weight: 400;
    color: ${colors.darkGrey};
    &:hover {
      cursor: auto;
      color: ${colors.darkGrey};
    }
  }
  &:hover {
    color: ${colors.neonGreen};
    cursor: pointer;
  }
`;

export const ColumUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 600px) {
    margin-bottom: 2rem;
    justify-content: center;
  }
`;
