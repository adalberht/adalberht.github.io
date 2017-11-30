import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
// import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { invertTheme } from '../redux/modules/utils';

@connect(state => ({ utils: state.utils }), { invertTheme })
class Routes extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.object.isRequired,
    }).isRequired,
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { primaryColor, secondaryColor } = this.props.utils;
    return (
      <RootContainer
        className="min-h-screen max-w-screen flex flex-col justify-between relative"
        background={secondaryColor}
      >
        <Navbar />
        <MobileNavbar />
        <Home />
        <About />
        <Skills />
        <Experiences />
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  background-color: ${props => props.background};
  transition: 1s;
  -webkit-transition: 1s;
`;

RootContainer.defaultProps = {
  background: null,
};

export default Routes;
