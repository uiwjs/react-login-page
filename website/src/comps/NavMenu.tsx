import styled from "styled-components"
import { mediaStyle } from './DocsLayout';
import { ReactComponent as LogoIcon } from '../svg/logo-large.svg';
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";

const Header = styled.header`
  border-top: 1px solid var(--color-border-muted);
  background-color: var(--color-neutral-muted);
  backdrop-filter: saturate(180%) blur(0.3rem);
  height: 52px;
  z-index: 10;
  margin-top: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  ${mediaStyle}
`;

const Logo = styled(LogoIcon)`
  display: block;
`;

export const NavMenu = () =>{
  return (
  <Header>
    <Inner>
      <NavLink to="/">
        <Logo height={32} />
      </NavLink>
      <Nav />
    </Inner>
  </Header>
  )
}