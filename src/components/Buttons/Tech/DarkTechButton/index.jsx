import React from "react";
import { DarkTechButtonWrapper } from "components/Buttons/Tech/DarkTechButton/DarkTechButton.styled";
import { BiArrowBack } from "react-icons/bi";

function DarkTechButton(props) {
  return (
    <DarkTechButtonWrapper>
      <p>{props.displayText}</p> <BiArrowBack size={25} />
    </DarkTechButtonWrapper>
  );
}

export default DarkTechButton;
