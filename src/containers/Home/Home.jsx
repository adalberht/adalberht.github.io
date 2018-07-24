import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Element} from 'react-scroll';
import {toHiragana} from 'wanakana';
import {HOME_ROUTE} from '../../constants/routes';
import {invertTheme} from '../../redux/modules/utils';
import Icon from '../../components/Icon';

const KONNICHIWA = toHiragana('konnichiha');

const RESUME_LINK =
  'https://docs.google.com/document/d/1-cxzcRapPkggSRh0Cl1APu2jP_7FGoUbdYmIqW1Rjdg/edit?usp=sharing';

@connect(state => ({ utils: state.utils }), { invertTheme })
class HomeComponent extends React.Component {
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
      <Element name={HOME_ROUTE}>
        <Container
          isUsingLightTheme={isUsingLightTheme}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          themeColor={themeColor}
        >
          <IdentityWrapper>
            <Greetings>{`Hi, ${KONNICHIWA}!`}</Greetings>
            <Name>
              My name is <span className="highlight bold">Albertus Angga Raharja</span>
            </Name>
            <Description>
              I'm a <span className="bold">junior</span> in{' '}
              <span className="highlight">Computer Science</span> at{' '}
              <a href="http://www.ui.ac.id/en/">University of Indonesia</a>
              {' '}and an aspiring <span className="highlight">Software Engineer</span>.
            </Description>
            <a className="button-link" href={RESUME_LINK} target="_blank">
              <span className="text">See my resume</span>
              <Icon className="arrow" name="arrow-right" color={themeColor} />
            </a>
          </IdentityWrapper>
        </Container>
      </Element>
    );
  }
}

export default HomeComponent;

const Container = styled.div`
  align-items: center;
  color: ${props => props.primaryColor};
  display: flex;
  font-family: ${props => props.theme.fonts.main};
  flex-direction: column;
  min-height: 100vh;
  align-self: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  a {
    font-weight: bold;
    text-decoration: underline;
    color: ${props => props.primaryColor};
  }
  .highlight {
    color: ${props => props.themeColor};
  }
  .bold {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  .button-link {
    color: ${props => props.primaryColor};
    position: relative;
    display: flex;
    text-decoration: none;
    -webkit-transition: 0.5s;
    align-self: flex-start;
    background: none;
    border-radius: 0;
    display: flex;
    flex: 0;
    margin-top: ${props => props.theme.margin['8']};
    transition: 0.5s;
    font-size: ${props => props.theme.textSizes.lg};
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
  .button-link:hover {
    .text {
      font-weight: bold;
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

const IdentityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin-left: ${props => props.theme.margin['4']};
    margin-right: ${props => props.theme.margin['4']};
  }
`;

const Greetings = styled.div`
  color: ${props => props.primaryColor};
  font-size: ${props => props.theme.textSizes['4xl']};
  margin-bottom: ${props => props.theme.margin['2']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['2xl']};
  }
`;

const Name = styled.div`
  color: ${props => props.primaryColor};
  font-size: ${props => props.theme.textSizes['5xl']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['3xl']};
  }
  margin-bottom: ${props => props.theme.margin['4']};
`;

const Description = styled.div`
  font-size: 1.25rem;
  font-family: ${props => props.theme.fonts.mono};
  margin-bottom: ${props => props.theme.margin['2']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['lg']};
  }
`;
