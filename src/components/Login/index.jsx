import React from "react";
import {
  BookWrapper,
  LiBook,
  UserPageContainer,
  UserPageWrapper,
  UlHorizontal,
  AreaCircles,
  Circles,
  LiCircles,
} from "./LoginPage.style.";
import LoginBoard from "./components/LoginBoard";
import SVGIcon from "assets/Login/undraw_delivery_truck_vt6p.svg";

function LoginPage() {
  return (
    <UserPageWrapper>
      <UserPageContainer>
        <BookWrapper>
          <UlHorizontal>
            <LiBook>
              <img alt="" src={SVGIcon} height={220} width={503} />
            </LiBook>
            <LiBook>
              <LoginBoard />
            </LiBook>
          </UlHorizontal>
        </BookWrapper>
      </UserPageContainer>
    </UserPageWrapper>
  );
}

export default LoginPage;
