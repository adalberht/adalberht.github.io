import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link, scroller } from 'react-scroll';
import SwitchButton from './SwitchButton';
import scrollLinks from '../constants/scrollLinks';
import albertIcon from '../assets/icon.png';


@withRouter
@connect(state => (state))
export default class Navbar extends React.Component {
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
        <Link
          active="active"
          className="without-border"
          duration={500}
          href={scrollLinks.HOME.to}
          key={scrollLinks.HOME.to}
          smooth
          spy
          to={scrollLinks.HOME.to}
          onClick={() => this.props.history.push(scrollLinks.HOME.to)}
        >
          <img src={albertIcon} alt="icon" />
        </Link>
        <Links>
          <SwitchButton />
          {Object.values(scrollLinks).map(scrollLink => (
            <Link
              active="active"
              key={scrollLink.to}
              to={scrollLink.to}
              spy
              smooth
              duration={500}
              href={scrollLink.to}
              onClick={() => this.props.history.push(scrollLink.to)}
            >
              {scrollLink.text}
            </Link>
          ))}
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

  box-shadow: ${props => props.theme.shadows.md};
  background-color: ${props => props.secondaryColor};
  transition: transform 0.5s ease;

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

  a {
    margin: 0.5rem;
    cursor: pointer;
    border-bottom: solid 1px ${props => props.themeColor};
    color: ${props => props.primaryColor};
    text-decoration: none;
    :hover {
      font-weight: bold;
    }
  }

  .without-border {
    border: none;
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
