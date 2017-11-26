import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { HOME_ROUTE } from '../../constants/routes';

class Home extends Component {
  state = {}
  render() {
    return (
      <Element name={HOME_ROUTE}>
        <Container>
          <IdentityWrapper>
            <Name>Albertus Angga Raharja</Name>
            <Description>Computer Science Student</Description>
            <Description>Future Software Engineer</Description>
          </IdentityWrapper>
        </Container>
      </Element>
    );
  }
}

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

const IdentityWrapper = props => (
  <div
    className={`
      flex
      flex-col
      mx-auto
    `}
    {...props}
  />
);

const Name = props => (
  <span
    className=" font-bold text-white text-5xl self-center justify-center text-center"
    {...props}
  />
);

const Description = props => (
  <span
    className="italic text-grey-lightest text-xl"
    {...props}
  />
);

export default Home;
