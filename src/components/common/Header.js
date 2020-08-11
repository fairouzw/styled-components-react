import React from "react";
import styled from "styled-components";
import {Link as ReactRouterDomLink, useLocation} from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

const Menu = styled.nav`
  display: block;
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;
//this menuAlt inherits all styles of menu but we can also override them
// const MenuAlt = styled(Menu)`
// border-top: 5px solid black;
// `;

const Link = ({isActive, children, ...props}) => {
  return(
    <ReactRouterDomLink {...props}>
      {children}
      </ReactRouterDomLink>
  )
}

//here we are styling the Linked component from react-router-dom
const StyledLink = styled(Link)`
padding: 4px 8px;
diplay: block;
text-align: center;
box-sizing: border-box;
margin: auto 0;
font-weight: ${p => p.isActive ? 'bold' : 'normal'};
color: black;
`;

export function Header() {
  const {pathname} = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
