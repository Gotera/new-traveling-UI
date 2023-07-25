import styled from "styled-components";
import { colors } from "App.style";

export const FooterWrapper = styled.div`
  background-color: ${colors.darkBlue};
  padding: 5% 5%;
  img {
    padding: 0 0% 5% 5%;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5%;
`;

export const ColumLi = styled.li`
  font-family: "Poppins", sans-serif;
  color: ${colors.white};
  font-weight: 500;
  &:first-child {
    margin-bottom: 1rem;
    font-weight: 400;
    color: ${colors.darkGrey};
  }
`;
export const ColumUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
