import React from "react";
import {
  BookWrapper,
  LiBook,
  UlHorizontal,
  UserPageContainer,
  UserPageWrapper,
} from "../Login/LoginPage.style.";
import SVGIcon from "../../assets/Login/undraw_delivery_truck_vt6p.svg";
function RegisterPage() {
  return (
    <UserPageWrapper>
      <UserPageContainer>
        <BookWrapper>
          <UlHorizontal>
            <LiBook>
              <img alt="" src={SVGIcon} height={220} width={503} />
            </LiBook>
            <LiBook>teste</LiBook>
          </UlHorizontal>
        </BookWrapper>
      </UserPageContainer>
    </UserPageWrapper>
  );
}

export default RegisterPage;
