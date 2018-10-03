

import { App, Dashboard, Outer } from './../components';
// Dashboard
import DashboardV1 from './Dashboard/Dashboard';
 import DashboardV2 from './Dashboard/DashboardV2';
// Layouts
import Grid from './Layouts/Grid';
import AppLayout from './Layouts/AppLayout';
import Responsive from './Layouts/Responsive';
// Themes
import Themes from './Themes';

//import withTracker from './withTracker';
import LoginDedicated from './Pages/Standalone/LoginDedicated';
import Login from './Pages/Users/Login';
import NotFound from './NotFound/NotFound';

export default (store) => { // eslint-disable-line
  // we can get an access to store
  return [{
    component: (App),
    routes: [
      {
        component: LoginDedicated,
        path: '/',
        exact: true,
      },
      {
        component: (Outer),
        path: '/login',
        routes: [
          {
            path: '/login',
            component: (Login),
            exact: true,
          },
          {
            path: '*',
            component: (NotFound)
          }
        ]
      },
      {
        component: (Dashboard),
        path: '/app',
        routes: [
          {
            path: '/app',
            component: (DashboardV1),
            exact: true,
          },
          {
            path: '/app/dashboard-v2',
            component: (DashboardV2),
          },
        ]
      }
    ]
  }];
};
