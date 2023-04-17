import React, { forwardRef, PropsWithoutRef } from 'react';
import styled from 'styled-components';
import { useRouteError } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0 23px;
`;

const Status = styled.em`
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  font-size: 21px;
`;

export interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ErrorPage = forwardRef<HTMLDivElement, PropsWithoutRef<ErrorPageProps>>(
  ({ children, ...htmlProps }, ref) => {
    const error = useRouteError() as Response;
    return (
      <Wrapper id="error-page" {...htmlProps} ref={ref}>
        <h1>Oops!</h1>
        <p>抱歉，发生了意外错误。</p>
        <p>
          {error?.status && <Status>{error?.status}</Status>}
          {error?.statusText && <i>{decodeURIComponent(error?.statusText || '')}</i>}
        </p>
      </Wrapper>
    );
  },
);
