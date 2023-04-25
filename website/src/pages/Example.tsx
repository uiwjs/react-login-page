import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaStyle } from '../comps/DocsLayout';
import * as datas from './Examples';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 0.953rem;
  ${mediaStyle}
`;

const Inner = styled(Link)<{ magnify?: number }>`
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
    ${({ magnify = 2 }) => css`
      transform: scale(${326 / (326 * magnify)});
      width: ${326 * magnify}px;
      height: ${265 * magnify}px;
    `}
  }
`;

export const Example = () => {
  return (
    <Wrapper>
      {Object.keys(datas).map((path, key) => {
        const comps = datas[path as keyof typeof datas];
        return (
          <Inner key={key} to={`/pages/${path}`} magnify={comps.magnify}>
            {comps.children}
          </Inner>
        );
      })}
    </Wrapper>
  );
};
