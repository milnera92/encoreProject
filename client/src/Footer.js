import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo to="/" end>
        Encore
      </StyledLogo>
      <StyledCopyright>
        Copyright © 2022 All Rights Reserved by Andrew Milner.{" "}
      </StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #7375b6;
`;
const StyledLogo = styled(NavLink)`
  text-decoration: none;
  width: 160px;
  margin: 2px;
  padding: 3px;
  font-size: 30px;
  font-family: "Lalezar", cursive;
  color: #2fe1b9;
`;

const StyledCopyright = styled.p`
  color: #fbf579;
  text-align: center;
`;
