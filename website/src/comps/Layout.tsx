import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './Footer';

const Wrapper = styled.div`
  display: flow-root;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  dark-mode {
    display: block;
    position: absolute;
    right: 14px;
    top: 11px;
    z-index: 9999;
    font-size: 21px;
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
