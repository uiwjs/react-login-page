import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '@wcj/dark-mode';
import { ReactComponent as LogoIcon } from '../svg/logo-large.svg';
import { Nav } from './Nav';

export const mediaStyle = css`
  @media (min-width: 640px) {
    & {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 768px;
    }
  }
  @media (min-width: 890px) {
    & {
      max-width: 890px;
    }
  }
  @media (min-width: 1024px) {
    & {
      max-width: 1024px;
    }
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  ${mediaStyle}
`;

const Header = styled.header`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 4rem;
  margin-top: 3rem;
  position: relative;
`;
const Logo = styled(NavLink)`
  svg {
    display: block;
  }
`;
const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DocsLayout = () => {
  return (
    <Wrapper className="wmde-markdown-var">
      <ScrollRestoration />
      <Header>
        <Logo to="/">
          <LogoIcon height={32} />
        </Logo>
        <Nav />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};
