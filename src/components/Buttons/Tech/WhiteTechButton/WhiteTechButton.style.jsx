import styled from "styled-components";
import { colors } from "App.style";

export const WhiteTechButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  background-color: transparent;
  color: ${colors.white};
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  border: 2px solid ${colors.white};
  cursor: pointer;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: ${colors.neonGreen};
    border-color: ${colors.white};
  }

  &:hover {
    color: ${colors.neonGreen};
    border: 2px solid ${colors.neonGreen};
  }

  p {
    padding-bottom: 1%;
  }

  svg {
    rotate: 180deg;
  }
`;
