import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as commonFunctioin from '../utilities/commonFunctions';

const PublicRoute = ({ component, layout: Layout, ...rest }) => {
  return (
    (
      <Route {...rest}>
        {commonFunctioin.isLogin()
          ? <Layout component={component} />
          : <Redirect to="/" />
        }
      </Route>
    )
  )
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export default PublicRoute;
