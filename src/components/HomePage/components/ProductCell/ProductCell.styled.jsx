import styled from "styled-components";
import { colors } from "App.style";

export const ProductCellWrapper = styled.div`
  background-color: ${colors.white};
  padding: 1.5rem;
  border-radius: 0.8rem;
`;
export const CellTop = styled.div`
  padding: 0rem 1rem 1rem 1rem;
  color: ${colors.babyBlue};
  display: flex;
  justify-content: center;
`;
export const CellBottom = styled.div`
  width: 15rem;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
  color: ${colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${colors.babyBlue};
    font-weight: 800;
    font-size: 1rem;
  }

  p {
    letter-spacing: 1px;
    flex-wrap: wrap;
    text-indent: 1rem;
  }
`;
