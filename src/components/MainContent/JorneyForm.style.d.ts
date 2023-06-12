const { default: styled } = require("styled-components");

export const JorneyFormWrapper = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;

  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin: 1rem;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    margin-top: 2rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border: 0.1px solid var(--grey);
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    width: 100%;
    font-size: 28px;
    padding: 1rem;
    text-align: center;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    background-color: var(--darkBlue);
    color: var(--white);
  }
`;

export const Ul = styled.ul`
  gap: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Li = styled.li`
  margin: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 15rem;
  height: 3rem;
  background-color: var(--grey);
  color: var(--black);
  font-size: 28px;
  line-height: 38px;
  padding-left: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: space - between;
  &focus {
    outline: 3px solid transparent;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: var(--lightierBlue);
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &hover,
  &:focus {
    background-color: var(--darkBlue);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &hover {
    transform: translateY(-1px);
  }

  &active {
    background-color: var(--darkBlue);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
  /* width: 13rem;
  height: 3rem;
  margin-top: auto;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700; */
`;

export const ErrorMessage = styled.span`
  height: 2rem;
  width: 15rem;
  color: var(--red);
  font-weight: 400;
  /* margin-bottom: 5rem; */
  display: block;
  position: relative;
  top: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
`;
