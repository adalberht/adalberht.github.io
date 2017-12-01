import React, { Component } from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadableExperiences = Loadable({
  loader: () => import('./Experiences'),
  loading: LoadingIndicator,
  timeout: 10000000,
  delay: 1000000,
});

class Experiences extends Component {
  state = {};
  render() {
    return (
      <Container>
        <LoadableExperiences />
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

export default Experiences;
