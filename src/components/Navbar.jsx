import React from 'react';
import ReactGA from "react-ga";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link, scroller } from 'react-scroll';
import SwitchButton from './SwitchButton';
import scrollLinks from '../constants/scrollLinks';
import albertIcon from '../assets/icon.png';
import Icon from "./Icon";
import { BLOG_URL } from "../api/data";


class Navbar extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    scrollDown: PropTypes.bool,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    scrollDown: false,
  };

  render() {
    const { primaryColor, secondaryColor, themeColor } = this.props.utils;
    const { scrollDown } = this.props;
    return (
      <Container
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        themeColor={themeColor}
        scrollDown={scrollDown}
      >
        <Links>
          <Link
            active="active"
            className="without-border"
            duration={500}
            href={scrollLinks.HOME.to}
            key={scrollLinks.HOME.to}
            smooth
            spy
            to={scrollLinks.HOME.to}
          >
            <img src={albertIcon} alt="icon" />
          </Link>
        </Links>
        <Links>
          <SwitchButton />
          {Object.values(scrollLinks).map(scrollLink => (
            <Link
              key={scrollLink.to}
              to={scrollLink.to}
              spy
              smooth
              duration={500}
              href={scrollLink.to}
              onClick={() => {
                ReactGA.event({
                  category: "Navigation",
                  action: scrollLink.to,
                })
              }}
            >
              {scrollLink.text}
            </Link>
          ))}
          <a href={BLOG_URL} className="blog">
            <span className="text">Blog</span>
            <Icon className="arrow" name="arrow-right" color={primaryColor} />
          </a>
        </Links>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  color: ${props => props.primaryColor};
  font-family: ${props => props.theme.fonts.mono};

  background-color: ${props => props.secondaryColor};
  transition: 1s;
  -webkit-transition: 1s;
  
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);

  ${props =>
    props.scrollDown &&
    `
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -ms-transform: translateX(-100%);
  `};

  .highlight {
    ${props => props.themeColor};
  }

  .active {
    color: ${props => props.themeColor};
    font-weight: bold;
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.themeColor};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  a {
    position: relative;
    margin: 0.5rem;
    cursor: pointer;
    color: ${props => props.primaryColor};
    text-decoration: none;
    font-family: sans-serif;
  }

  .without-border {
    border: none;
   
  }
  .without-border:before {
    display: none;
  }
  
  .blog:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.primaryColor};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  
  .blog {
    font-weight: bold;
    background-color: ${props => props.themeColor};
    color: white;
    padding: 1rem;
  }
  
  .text {
      margin-right: ${props => props.theme.margin['2']};
  }

  .arrow {
    animation: slide 1s linear infinite;
  }

  img {
    height: ${props => props.theme.height['8']};
    object-fit: scale-down;
    margin: ${props => props.theme.margin['1']} ${props => props.theme.margin['4']};
    cursor: pointer;
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    display: none;
  }
  border: none;
`;

Container.propTypes = {
  primaryColor: PropTypes.string,
  themeColor: PropTypes.string,
};

Container.defaultProps = {
  primaryColor: 'black',
  themeColor: 'black',
};

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

Flex.propTypes = {
  column: PropTypes.bool,
};

Flex.defaultProps = {
  column: false,
};

const Links = styled.div`
  display: flex;
  align-items: center;
`;

export default withRouter(connect(state => (state))(Navbar));
