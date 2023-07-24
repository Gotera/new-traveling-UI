import React, { useContext, useState } from "react";
import {
  FieldsWrapper,
  LoginInput,
  UserTittle,
  UserWrapper,
  SubmitButton,
  InputContainer,
} from "./LoginBoard.style";
import { Li, Ul } from "components/TravelsHistory/components/DataUI/DataUI.style";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { AuthContext } from "common/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPainel() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/createTravel");
      } else {
        alert("Não Logou");
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
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
            </Li>
            <Li>
              <InputContainer>
                <HiOutlineLockClosed className="React_Icon" />
                <LoginInput
                  required
                  type="password"
                  placeholder="Senha"
                  value={password}
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
              <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
            </Li>
          </Ul>
        </form>
      </FieldsWrapper>
    </UserWrapper>
  );
}

export default LoginPainel;
