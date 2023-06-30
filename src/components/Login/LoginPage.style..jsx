import styled from "styled-components";
import { colors } from "../../App.style";

export const LoginPageWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPageContainer = styled.div``;
export const BookWrapper = styled.div`
  background-color: ${colors.darkBlue};
  border-radius: 1rem;
`;
export const UlHorizontal = styled.ul`
  padding: 3rem;
  gap: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
