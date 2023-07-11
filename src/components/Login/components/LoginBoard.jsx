import React, { useContext, useState } from "react";
import {
  FieldsWrapper,
  LoginInput,
  UserTittle,
  UserWrapper,
  SubmitButton,
  InputContainer,
} from "./LoginBoard.style";
import { Li, Ul } from "../../HistoryContent/Components/DataUI/DataUI.style";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { AuthContext } from "../../../common/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPainel() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate('/')
      } else {
        alert("Não Logou")
      }
    }
  };
  return (
    <UserWrapper>
      <UserTittle>
        <h2>Login</h2>
      </UserTittle>
      <FieldsWrapper>
        <form>
          <Ul>
            <Li>
              <InputContainer>
                <HiOutlineMail className="React_Icon" />
                <LoginInput
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
            </Li>
            <Li>
              <InputContainer>
                <HiOutlineLockClosed className="React_Icon" />
                <LoginInput
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>
            </Li>
            <Li>
              <p htmlFor="checkbox">
                <label>
                  <input id="checkbox" type="checkbox" />
                  Lembrar
                </label>
              </p>
              <p>
                <a href="/">Esqueceu a Senha?</a>
              </p>
            </Li>
            <Li>
              <p>
                <a href="/register">Ainda não possui uma conta?</a>
              </p>
            </Li>
            <Li>
              <SubmitButton>Entrar</SubmitButton>
            </Li>
          </Ul>
        </form>
      </FieldsWrapper>
    </UserWrapper>
  );
}

export default LoginPainel;
