import React from "react";
import {
  BookWrapper,
  LiBook,
  UlHorizontal,
  UserPageContainer,
  UserPageWrapper,
} from "components/Login/LoginPage.style.";
import SVGIcon from "assets/Login/undraw_delivery_truck_vt6p.svg";
import RegisterPainel from "components/Register/components";
function RegisterUser() {
  return (
    <UserPageWrapper>
      <UserPageContainer>
        <BookWrapper>
          <UlHorizontal>
            <LiBook>
              <img alt="" src={SVGIcon} height={220} width={503} />
            </LiBook>
            <LiBook>
              <RegisterPainel />
            </LiBook>
          </UlHorizontal>
        </BookWrapper>
      </UserPageContainer>
    </UserPageWrapper>
  );
}

export default RegisterUser;