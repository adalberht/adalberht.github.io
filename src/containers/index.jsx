import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import ReactGA from "react-ga";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import { invertTheme } from "../redux/modules/utils";
import { GOOGLE_ANALYTICS_TRACKING_ID } from "../api/data";

class Routes extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.object.isRequired
    }).isRequired,
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired
    }).isRequired
  };

  state = {
    onScrollDown: false
  };

  onScroll = () => {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    if (offset > this.lastScrollPosition) {
      this.setState({ onScrollDown: true });
    } else {
      this.setState({ onScrollDown: false });
    }
    this.lastScrollPosition = offset;
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  componentDidMount() {
    ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID, { debug: true });
    ReactGA.set({});
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.addEventListener("scroll", this.onScroll);
  }

  lastScrollPosition = 0;

  render() {
    const { secondaryColor } = this.props.utils;
    const { onScrollDown } = this.state;
    return (
      <RootContainer background={secondaryColor}>
        <Navbar scrollDown={onScrollDown} />
        <MobileNavbar scrollDown={onScrollDown} />
        <Home />
        <Experiences />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  -webkit-transition: 1s;
  background-color: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  position: relative;
  transition: 1s;
  max-width: 100vw;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
`;

RootContainer.defaultProps = {
  background: null
};

export default connect(
  state => ({ utils: state.utils }),
  { invertTheme }
)(Routes);
