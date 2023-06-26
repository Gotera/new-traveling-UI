import { colors } from "../../../../App.style";

const { default: styled } = require("styled-components");

export const DataUiComponnet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const HistoryCellWrapper = styled.div`
  padding-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    gap: 15rem;
    align-items: center;
  }
`;

export const DataUiWrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border: 1px solid ${colors.grey};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  input {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", sans-serif;
  }
`;

export const ContentTittle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  padding: 2rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 8px 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
  @media (max-width: 600px) {
    width: 106.7px;
  }
`;

export const ContentData = styled.div`
  padding: 2rem;
  gap: 1rem;
  display: flex;
  background-color: ${colors.white};
  border-bottom-left-radius: 0.5rem;
  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 1;
  ul {
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Ul = styled.ul`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const DataWrapper = styled.div``;

export const CustomSearchInput = styled.input`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  padding: 4px;
  border: 0;
  outline: 0;
  border-radius: 2em;
  box-sizing: border-box;
  border: 2px solid ${colors.darkBlue};
`;

export const CustomNotaFiscalInput = styled.input`
  width: 10rem;
  top: 0;
`;

export const CustomDataInput = styled.input`
  width: 5rem;
`;

export const WrapperPagination = styled.div`
  gap: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const PaginationButton = styled.button`
  padding: 4px;
  border: none;
  border-bottom: 3px solid ${colors.lightierBlue};
  background-color: ${colors.white};
`;

export const PagesButton = styled.button`
  padding: 4px;
  border: none;
  font-weight: 400;
  border: 2px solid ${colors.lightierBlue};
  background-color: ${colors.white};
  margin-left: 4px;

  &:first-child {
    margin-left: 0px;
  }
`;
