import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { SKILLS_ROUTE } from '../../constants/routes';

class Skills extends Component {
  state = {};
  render() {
    return (
      <Element name={SKILLS_ROUTE}>
        <Container>
          <h1>Skills</h1>
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
  <span className="italic text-grey-lightest text-xl" {...props} />
);

export default Skills;
