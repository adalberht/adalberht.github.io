import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
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

  state = {
    onScrollDown: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    if (offset > this.lastScrollPosition) {
      this.setState({ onScrollDown: true });
    } else {
      this.setState({ onScrollDown: false });
    }
    this.lastScrollPosition = offset;
  };

  lastScrollPosition = 0;

  render() {
    const { primaryColor, secondaryColor } = this.props.utils;
    const { onScrollDown } = this.state;
    return (
      <Switch>
        <Route
          path="*"
          render={() => (
            <RootContainer background={secondaryColor}>
              <Navbar scrollDown={onScrollDown} />
              <MobileNavbar scrollDown={onScrollDown} />
              <Home />
              <Skills />
              <Experiences />
              <About />
              <Footer />
            </RootContainer>)}
        />
      </Switch>
    );
  }
}

const RootContainer = styled.div`
  -webkit-transition: 1s;
  background-color: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  transition: 1s;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

RootContainer.defaultProps = {
  background: null,
};

export default Routes;
