import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../reusable-ui/Logo";

export default function LoginPage() {
  // affichage
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/burger-and-fries-background.jpg");
  background-size: cover;

  .logo-login-page {
    transform: scale(2.5);
  }
`;
