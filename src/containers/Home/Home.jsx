import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { toHiragana } from 'wanakana';
import { HOME_ROUTE } from '../../constants/routes';
import { invertTheme } from '../../redux/modules/utils';

const konnichiwa = toHiragana('konnichiha');

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
    font-size: ${props => props.theme.textSizes['2xl']};
  }
  margin-bottom: ${props => props.theme.margin['4']};
`;

const Description = styled.div`
  font-size: ${props => props.theme.textSizes['lg']};
  font-family: ${props => props.theme.fonts.mono};
  margin-bottom: ${props => props.theme.margin['2']};
`;

@connect(
  state => ({ utils: state.utils }),
  { invertTheme },
)
class HomeComponent extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { isUsingLightTheme, primaryColor, themeColor } = this.props.utils;
    return (
      <Element name={HOME_ROUTE}>
        <Container
          isUsingLightTheme={isUsingLightTheme}
          primaryColor={primaryColor}
          themeColor={themeColor}
        >
          <IdentityWrapper>
            <Greetings>
              {`Hi, ${konnichiwa}!`}
            </Greetings>
            <Name>
              My name is <span className="highlight bold">Albertus Angga Raharja</span>
            </Name>
            <Description>
              A <span className="bold">sophomore</span> in{' '}
              <span className="highlight">Computer Science</span> at{' '}
              <a href="http://www.ui.ac.id/en/">University of Indonesia,</a>
            </Description>
            <Description>
              An aspiring <span className="highlight">Software Engineer</span> in a journey to become a <span className="highlight"> full-stack developer</span>.
            </Description>
          </IdentityWrapper>
        </Container>
      </Element>
    );
  }
}

export default HomeComponent;
