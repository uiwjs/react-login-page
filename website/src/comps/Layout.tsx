import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '@wcj/dark-mode';
import { Footer } from './Footer';

const Wrapper = styled.div`
  display: flow-root;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  dark-mode {
    display: block;
    position: absolute;
    right: 9px;
    top: 6px;
    z-index: 9999;
    font-size: 21px;
  }
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
  @media (min-width: 1024px) {
    & {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    & {
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px) {
    & {
      max-width: 1536px;
    }
  }
`;

export const Layout = () => {
  return (
    <Wrapper className="wmde-markdown-var">
      <dark-mode permanent style={{ zIndex: 999, position: 'fixed' }}></dark-mode>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
