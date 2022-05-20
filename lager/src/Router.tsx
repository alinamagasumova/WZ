import React from 'react';

import { Home } from './pages/Home';

import {
  useRoutes,
  RouteObject,
} from 'react-router-dom';

export enum Routes {
  HOME = '/',
}

export const routes: RouteObject[] = [
  {
    path: Routes.HOME,
    element: <Home />
  },
];

export const Router = () => useRoutes(routes);
