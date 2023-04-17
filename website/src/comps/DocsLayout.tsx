import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '@wcj/dark-mode';
import { ReactComponent as LogoIcon } from './logo.svg';

const Wrapper = styled.div`
  margin: 0 auto;
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

const Header = styled.header`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 4rem;
  margin-top: 3rem;
`;
const Logo = styled(NavLink)`
  svg {
    display: block;
  }
`;
const Github = styled.a``;
const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DocsLayout = () => {
  return (
    <Wrapper className="wmde-markdown-var">
      <Header>
        <Logo to="/">
          <LogoIcon height={32} />
        </Logo>
        <Github href="https://github.com/uiwjs/react-login-page" target="_blank">
          Github
        </Github>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};
