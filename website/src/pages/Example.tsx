import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaStyle } from '../comps/DocsLayout';
import * as datas from './Examples';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.953rem;
  ${mediaStyle}
`;

const Title = styled.div`
  width: auto !important;
  height: auto !important;
  position: absolute;
  transform: scale(1) !important;
  background-color: rgba(var(--color-rgb) / 39%);
  color: var(--color-canvas-default);
  border-radius: 5px;
  padding: 1px 4px 3px 4px;
  top: -25px;
  left: 10px;
  transition: all 0.3s;
`;

const Inner = styled(Link)<{ magnify?: number }>`
  overflow: hidden;
  display: block;
  position: relative;
  width: 326px;
  height: 265px;
  border-radius: 0.571rem;
  text-decoration: none;
  box-shadow: 0 0px 3px transparent;
  border: 1px solid transparent;
  transition: all 0.3s;
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    transition: all 0.3s;
    z-index: 2;
    inset: 0;
  }
  &:hover {
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
    border-color: rgb(0 0 0 / 11%);
  }
  &:hover ${Title} {
    top: 10px;
    z-index: 1;
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
  const data = Object.keys(datas);

  data.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.match(/\d+/)?.[0] || '0');
    return numA - numB;
  });

  return (
    <Wrapper>
      {data.map((path, key) => {
        const comps = datas[path as keyof typeof datas];
        return (
          <Inner key={key} to={`/pages/${path}`} magnify={comps.magnify}>
            {comps.children}
            <Title>{path}</Title>
          </Inner>
        );
      })}
    </Wrapper>
  );
};
