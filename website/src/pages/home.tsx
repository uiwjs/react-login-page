import styled from 'styled-components';
import { Link, ScrollRestoration } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../svg/logo-large.svg';
import { Example } from './Example';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 9;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0;
`;
const SubTitle = styled.h2`
  color: var(--color-fg-subtle);
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 2rem;
  text-align: center;
  max-width: 36rem;
  margin: 0.75rem auto 2rem auto;
`;

const Logo = styled(LogoIcon)`
  margin: 12rem auto 3rem auto;
  display: block;
`;

const Nav = styled.nav`
  text-align: center;
  margin-bottom: 2rem;
`;

const Header = styled.div``;

const version = VERSION;

export const Home = () => {
  return (
    <Wrapper>
      <ScrollRestoration />
      <Header>
        <Logo height="4rem" />
      </Header>
      <Title>React Login Page</Title>
      <SubTitle>Install and use react login page components quickly and easily, with flexible APIs for modifying these components.</SubTitle>
      <Nav>
        <Link to="/docs">Documentation</Link> · v{version}
      </Nav>
      <Example />
    </Wrapper>
  );
};
