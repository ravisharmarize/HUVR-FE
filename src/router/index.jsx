import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          {publicRoutes.map(({
            key, exact, path, component, layout
          }) => (
            <PublicRoute
              key={key}
              exact={exact}
              path={path}
              component={component}
              layout={layout}
            />
          ))}

          {privateRoutes.map(({
            key, exact, path, component, layout,
          }) => (
            <PrivateRoute
              key={key}
              exact={exact}
              path={path}
              component={component}
              layout={layout}
            />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;