import styled from "styled-components";
import { colors } from "../../App.style";

export const LoginPageWrapper = styled.div`
  width: 60rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPageContainer = styled.div``;
export const BookWrapper = styled.div`
  padding: 6rem;
  background-color: ${colors.darkBlue};
`;
export const UlHorizontal = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15rem;
`;
