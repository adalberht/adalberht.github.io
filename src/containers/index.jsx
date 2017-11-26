import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../constants/theme';
import Home from './Home';
import Skills from './Skills';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
// import Footer from '../components/Footer';

class Routes extends Component {
  componentDidMount() {

  }

  scrollDown() {
    console.log('scroll down');
  }

  render() {
    return (
      <RootContainer className="min-h-screen max-w-screen flex flex-col justify-between" onScrollDown={() => this.scrollDown()}>
        <Navbar />
        <MobileNavbar />
        <Home />
        <Skills />
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  ${props => props.background};
`;

RootContainer.defaultProps = {
  background: theme.linearGradient.main,
};

export default Routes;
