import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter, RouteObject } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import '@wcj/dark-mode';
import { Fallback } from './comps/Fallback';
import { routes } from './router';

export const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --gradient-from: #1c1e20;
    --gradient-to: #0d1117;
    --color-rgb: 255 255 255;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --gradient-from: #e5eaf0;
    --gradient-to: #fff;
    --color-rgb: 0 0 0;
  }
  body {
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    min-height: 100vh;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 21rem;
      top: 0px;
      --gradient-stops: var(--gradient-from),var(--gradient-to);
      background-image: linear-gradient(to bottom,var(--gradient-stops));
    }
  }
  html {
    min-height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Fragment>
    <GlobalStyle />
    <dark-mode permanent style={{ zIndex: 999, position: 'fixed', display: 'none' }}></dark-mode>
    <RouterProvider router={createHashRouter([routes] as RouteObject[])} fallbackElement={<Fallback />} />
  </Fragment>,
);
