import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { toHiragana } from 'wanakana';
import { HOME_ROUTE } from '../../constants/routes';
import { invertTheme } from '../../redux/modules/utils';

const konnichiwa = toHiragana('konnichiwa');

const Container = props => (
  <div
    className={`
      container
      flex
      flex-col
      h-screen
      mx-auto
      justify-center
    `}
    {...props}
  />
);
const IdentityWrapper = styled(props => (
  <div
    className={`
      flex
      flex-col
    `}
    {...props}
  />
))`
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin-left: ${props => props.theme.margin['4']};
    margin-right: ${props => props.theme.margin['4']};
  }
`;

const Greetings = styled.div`
  color: ${props => props.primaryColor};
  font-size: ${props => props.theme.textSizes['5xl']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['3xl']};
  }
`;

const Name = styled(props => (
  <div
    className="sm:font-bold text-lg md:text-lg font-mono"
    {...props}
  />
))`
  font-size: ${props => props.theme.textSizes['5xl']}
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['3xl']};
  }
  color: ${props => props.primaryColor};
`;

const Description = props => (
  <div className="text-grey-lightest text-2xl" {...props} />
);

@connect(
  state => ({ utils: state.utils }),
  { invertTheme },
)
class HomeComponent extends React.Component {
  render() {
    const { primaryColor, secondaryColor } = this.props.utils;
    return (
      <Element name={HOME_ROUTE}>
        <Container>
          <IdentityWrapper>
            <Greetings primaryColor={primaryColor}>
              {`Hi, ${konnichiwa}!`}
            </Greetings>
            <Name primaryColor={primaryColor}>
              My name is <span className="text-black">Albertus Angga Raharja</span>
            </Name>
            <Description>
              A <span className="bold">sophomore</span> majoring{' '}
              <span className="text-black">Computer Science</span> at{' '}
              <span className="text-yellow">University of Indonesia</span>
            </Description>
            <Description>
              Currently in a journey to become a full-stack developer.
            </Description>
          </IdentityWrapper>
        </Container>
      </Element>
    );
  }
};

export default HomeComponent;
