
import styled from "styled-components"
import { NavLink } from "react-router-dom";

const Menu = styled.nav`
  display: flex;
  gap: 0.367rem;
  a {
    color: var(--color-fg-default);
    color: var(--color-accent-fg);
    font-size: 0.885rem;
    text-decoration: none;
    padding: 0.253rem 0.3rem;
    border-radius: 0.23rem;
    &.active {
      background-color: var(--color-neutral-muted);
    }
  }
`;

export const Nav = () =>{
  return (
    <Menu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/docs">Document</NavLink>
      <a href="https://github.com/uiwjs/react-login-page" rel="noreferrer" target="_blank">Github</a>
    </Menu>
  )
}