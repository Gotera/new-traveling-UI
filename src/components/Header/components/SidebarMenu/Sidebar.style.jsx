import styled from "styled-components";
import { colors } from "App.style";

export const SidebarWrapper = styled.div`
  z-index: 3;
  width: 22rem;
  transition: 0.6s ease-in;
`;

export const Label = styled.label`
  width: 40px;
  right: 1rem;
  z-index: 1;
  cursor: pointer;
  visibility: visible;
  display: flex;
  flex-direction: column;
  .Bar {
    width: 40px;
    height: 5px;
    margin-bottom: 10px;
    background-color: ${colors.white};
    border-radius: 10px;
    transition: 0.4s;
    z-index: 2;
  }
`;

export const SideBarInput = styled.input`
  display: none;

  &:checked ~ Label :first-child {
    position: absolute;
    transform: rotate(45deg);
  }

  &:checked ~ Label span:nth-child(2) {
    display: none;
  }

  &:checked ~ Label span:nth-child(3) {
    position: absolute;
    transform: rotate(-45deg);
  }

  &:checked ~ .Sidebar {
    transform: translateX(0);
    z-index: 1;
  }

  &:checked ~ .Sidebar {
    display: flex;
    background: linear-gradient(180deg, #0b2447 12.6%, #19376d 100%);
    box-shadow: 0 0 20px 3px;
    z-index: 1;
  }
`;

export const SidebarBody = styled.div`
  width: 10rem;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(-100%);

  ul {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: ${colors.grey};

    li .svg {
      margin-right: 5px;
      vertical-align: middle;
    }

    li:first-child {
      padding: 15px;
      user-select: none;
    }

    li:nth-child(2),
    li:nth-child(3) {
      padding: 15px;
      cursor: pointer;

      &:hover {
        background-color: ${colors.white};
        color: ${colors.lightierBlue};
        border-radius: 5px;
      }
    }
  }
`;
