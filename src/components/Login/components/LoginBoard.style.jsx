import styled from "styled-components";
import { colors } from "../../../App.style";

export const LoginWrapper = styled.div`
  width: 23rem;
  height: 32rem;
  margin-top: 16rem;
  border-radius: 0.8rem;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  background-color: ${colors.lightierBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0%;

  @media (max-width: 1000px) {
    margin-top: 10rem;
  }
`;

export const LoginTittle = styled.div`
  font-family: "Roboto Mono", monospace, Circular, -apple-system,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  padding: 1.5rem 2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: ${colors.white};
  background-color: ${colors.babyBlue};
  border: 2px solid ${colors.white};
  position: absolute;
  bottom: 66%;
`;

export const FieldsWrapper = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  Li:nth-child(5) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${colors.white};

    p {
      cursor: pointer;
      &:hover,
      &:focus {
        transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      }
    }
  }
`;

export const LoginInput = styled.input`
  height: 3rem;
  padding: 4px;
  border: 0;
  outline: 0;
  border-bottom: 4px solid ${colors.babyBlue};
  box-sizing: border-box;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 1rem;
  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
`;

export const SubmitButton = styled.button`
  border: 0.1px solid ${colors.white};
  height: 3rem;
  padding: 4px;
  background-color: ${colors.babyBlue};
  color: ${colors.white};
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-style: normal;
  letter-spacing: normal;
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.babyBlue};
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
`;
