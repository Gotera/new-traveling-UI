import styled from "styled-components";
import { colors } from "../../App.style";

export const UserPageWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserPageContainer = styled.div`
  position: absolute;
  z-index: 1;
`;
export const BookWrapper = styled.div`
  background-color: ${colors.darkBlue};
  border-radius: 1rem;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 100px);
    border-radius: 0;
  }
`;

export const LiBook = styled.li`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    img {
      display: none;
    }
  }
`;

export const UlHorizontal = styled.ul`
  padding: 3rem;
  gap: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    gap: 0;
  }
`;
