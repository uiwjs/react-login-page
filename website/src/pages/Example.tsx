import LoginBase from '@react-login-page/base';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { mediaStyle } from '../comps/DocsLayout';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 0.753rem;
  ${mediaStyle}
`;

const Inner = styled(Link)`
  overflow: hidden;
  display: block;
  position: relative;
  width: 326px;
  height: 265px;
  border-radius: 0.571rem;
  text-decoration: none;
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    transition: all 0.3s;
    z-index: 2;
    inset: 0;
  }
  &:hover::before {
    background-color: var(--color-neutral-muted);
  }
  & > * {
    transform-origin: top left;
    transform: scale(0.5);
    width: 652px;
    height: 530px;
  }
`;

export const Example = () => {
  return (
    <Wrapper>
      <Inner to="/pages/base">
        <LoginBase>
          <LoginBase.Logo>
            <Logo />
          </LoginBase.Logo>
        </LoginBase>
      </Inner>
    </Wrapper>
  )
}