import React from 'react';

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
    element: <div />
  },
];

export const Router = () =>useRoutes(routes);
