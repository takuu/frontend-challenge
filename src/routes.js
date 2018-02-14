import React from 'react';
import AppLayout from './containers/AppLayout/AppLayout.js';
import Home from './containers/Home/Home.js';

const routes = [
  {
    component: AppLayout,
    routes: [
      { path: '/', component: Home, exact: true },
    ]
  }
];


export default routes;