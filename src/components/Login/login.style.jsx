import styled from "styled-components";
import { colors } from "../../App.style";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginTittle = styled.div`

`

export const FieldsWrapper = styled.div`

`

export const LoginInput = styled.input`
  width: 13.5rem;
  height: 3rem;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  padding: 4px;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  border-bottom: 2px solid ${colors.darkBlue};
`;
