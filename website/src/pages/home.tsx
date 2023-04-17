import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../comps/logo.svg';

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  margin-top: 3rem;
`;
const SubTitle = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  color: var(--color-fg-subtle);
`;

const Logo = styled(LogoIcon)`
  margin: 12rem auto 8rem auto;
  display: block;
`;

const Nav = styled.nav`
  text-align: center;
`;

const version = VERSION;

export const Home = () => {
  return (
    <Wrapper>
      <Logo height="4rem" />
      <Title>React Login Page</Title>
      <SubTitle>Fast multiple choice React login pages.</SubTitle>
      <Nav>
        <NavLink to="/docs">Documentation</NavLink> · v{version}
      </Nav>
    </Wrapper>
  );
};
