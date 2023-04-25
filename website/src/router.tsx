import { Navigate, IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import { ErrorPage } from './comps/ErrorPage';
import { Layout } from './comps/Layout';
import { DocsLayout } from './comps/DocsLayout';
import { PagesLayout } from './comps/PagesLayout';

import { Home } from './pages/home';
import { Preview } from './comps/Preview';
import * as datas from './pages/Examples';

export interface MenuRouteObject
  extends Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<NonIndexRouteObject, 'children' | 'index'> {
  index?: boolean;
  label?: string;
  children?: MenuRouteObject[];
}

export const routes: MenuRouteObject = {
  path: '/',
  Component: Layout,
  ErrorBoundary: ErrorPage,
  children: [
    {
      index: true,
      Component: Home,
    },
    {
      path: 'docs',
      Component: DocsLayout,
      children: [
        {
          index: true,
          element: <Navigate to="getting-started" />,
        },
        {
          label: 'OVERVIEW',
        },
        {
          path: 'getting-started',
          label: 'Getting Started',
          element: <Preview path={() => import('react-login-page/README.md')} />,
        },
      ],
    },
    {
      path: 'pages',
      Component: PagesLayout,
      children: [
        {
          index: true,
          element: <Navigate to="base" />,
        },
        {
          path: 'base',
          element: (
            <Preview disableNav path={() => import('@react-login-page/base/README.md')}>
              {datas.base.children}
            </Preview>
          ),
        },
        {
          path: 'page1',
          element: (
            <Preview disableNav path={() => import('@react-login-page/page1/README.md')}>
              {datas.page1.children}
            </Preview>
          ),
        },
        {
          path: 'page2',
          element: (
            <Preview disableNav path={() => import('@react-login-page/page2/README.md')}>
              {datas.page2.children}
            </Preview>
          ),
        },
        {
          path: 'page3',
          element: (
            <Preview disableNav path={() => import('@react-login-page/page3/README.md')}>
              {datas.page3.children}
            </Preview>
          ),
        },
        {
          path: 'page4',
          element: (
            <Preview disableNav path={() => import('@react-login-page/page4/README.md')}>
              {datas.page4.children}
            </Preview>
          ),
        },
        {
          path: 'page5',
          element: (
            <Preview disableNav path={() => import('@react-login-page/page5/README.md')}>
              {datas.page5.children}
            </Preview>
          ),
        },
        {
          path: 'page6',
          element: (
            <Preview disableNav path={() => import('@react-login-page/page6/README.md')}>
              {datas.page6.children}
            </Preview>
          ),
        },
      ],
    },
  ],
};