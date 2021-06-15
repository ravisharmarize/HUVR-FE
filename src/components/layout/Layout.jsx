import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './footer';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';

const Layout = (props) => {
  let { component: Component } = props;

  const urlPath = props.location.pathname;
  let showHideNav = true;
  if (urlPath === '/login' || urlPath === '/register' || urlPath === '/otp-verification') {
    showHideNav = false;
  }
  return (
    <React.Fragment>
      {showHideNav && <Navbar />}
      <Component />
      {showHideNav && <Footer />}
    </React.Fragment>
  )
}

Layout.propTypes = {
  component: PropTypes.func.isRequired,
};

const enhance = compose(withRouter);
export default enhance(Layout);
