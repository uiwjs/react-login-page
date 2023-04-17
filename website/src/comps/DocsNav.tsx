import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../router';

const Nav = styled.nav`
  min-width: 10rem;
  padding-top: 1rem;
`;

const NavSticky = styled.div`
  position: sticky;
  top: 0;
  a {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    position: relative;
    display: block;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s;
    &,
    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    &.active,
    &:hover {
      color: var(--color-fg-subtle);
      text-decoration: underline;
      font-weight: bold;
      &::before {
        content: '';
        display: block;
        position: absolute;
        margin-left: -0.64rem;
        margin-top: 0.16rem;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-left: 6px solid var(--color-fg-subtle);
        border-right: 6px solid transparent;
        border-bottom: 6px solid transparent;
      }
    }
  }
`;

const MenuTitle = styled.div`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-bottom: 0.25rem;
  margin-top: 0.75rem;
`;

export const DocsNav = () => {
  const menus = routes.children?.find((item) => item.path === 'docs')?.children || [];
  return (
    <Nav>
      <NavSticky>
        {menus.map((item, key) => {
          if (!item.path && item.label) {
            return <MenuTitle key={key}>{item.label}</MenuTitle>;
          }
          if (!item.path) return null;
          return (
            <NavLink key={`/docs/${item.path}`} to={`/docs/${item.path}`}>
              {item.label}
            </NavLink>
          );
        })}
      </NavSticky>
    </Nav>
  );
};
