import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { EXPERIENCES_ROUTE } from '../../constants/routes';
import { invertTheme } from '../../redux/modules/utils';
import Icon from '../../components/Icon';


@connect(state => ({ utils: state.utils }), { invertTheme })
class ExperiencesComponent extends Component {
  static propTypes = {
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { isUsingLightTheme, primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Element name={EXPERIENCES_ROUTE}>
        <Container
          isUsingLightTheme={isUsingLightTheme}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          themeColor={themeColor}
        >
          <h1>Experiences</h1>
        </Container>
      </Element>
    );
  }
}

export default ExperiencesComponent;

const Container = styled.div`
  align-items: center;
  color: ${props => props.primaryColor};
  display: flex;
  font-family: ${props => props.theme.fonts.main};
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  .highlight {
    color: ${props => props.themeColor};
  }
  .bold {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  a {
    color: ${props => props.primaryColor};
  }
  button {
    -webkit-transition: 0.5s;
    align-self: flex-start;
    background: none;
    border-radius: 0;
    display: flex;
    flex: 0;
    margin-top: ${props => props.theme.margin['8']};
    transition: 0.5s;
    font-size: ${props => props.theme.textSizes.lg};
    a {
      position: relative;
      display: flex;
      text-decoration: none;
      @keyframes slide {
        0% {
          -webkit-transform: translateX(0%);
          -ms-transform: translateX(0%);
          transform: translateX(0%);
        }
        50% {
          -webkit-transform: translateX(50%);
          -ms-transform: translateX(50%);
          transform: translateX(50%);
        }
        100% {
          -webkit-transform: translateX(0%);
          -ms-transform: translateX(0%);
          transform: translateX(0%);
        }
      }
      .text {
        margin-right: ${props => props.theme.margin['2']};
        border-bottom: ${props => `${props.theme.borderWidths['2']} solid ${props.themeColor}`};
      }
      .arrow {
        animation: slide 1s linear infinite;
      }
    }
    :hover {
      .text {
        font-weight: bold;
      }
    }
  }
`;

Container.propTypes = {
  themeColor: PropTypes.string.isRequired,
  isUsingLightTheme: PropTypes.bool,
};

Container.defaultProps = {
  isUsingLightTheme: false,
};

