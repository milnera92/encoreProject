import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledLoginButton onClick={() => loginWithRedirect()}>
      Log In
    </StyledLoginButton>
  );
};

export default LoginButton;

const StyledLoginButton = styled.button`
  background-color: #161748;
  border: 2px solid #f95d9b;
  text-decoration: none;
  color: #f95d9b;
  margin: 2px;
  padding: 3px;
  font-size: 20px;
  box-shadow: 3px 4px 0px 0px #f95d9b;
  border-radius: 5px;

  &:link {
    text-decoration: none;
    color: #f95d9b;
  }

  &:visited {
    text-decoration: none;
    color: #f95d9b;
  }

  &:hover {
    background-color: #7375b6;
    color: #f5bb09;
    border-radius: 10px;
  }

  &.active {
    color: #f95d9b;
  }
`;
