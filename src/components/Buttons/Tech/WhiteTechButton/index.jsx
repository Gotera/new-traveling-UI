import React from "react";
import { WhiteTechButtonWrapper } from "components/Buttons/Tech/WhiteTechButton/WhiteTechButton.style";
import { BiArrowBack } from "react-icons/bi";

function WhiteTechButton(props) {
  return (
    <WhiteTechButtonWrapper>
      <p>{props.displayText}</p> <BiArrowBack size={25} />
    </WhiteTechButtonWrapper>
  );
}

export default WhiteTechButton;
