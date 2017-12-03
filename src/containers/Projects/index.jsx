import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadableProjects = Loadable({
  loader: () => import('./Projects'),
  loading: LoadingIndicator,
  timeout: 10000000,
  delay: 1000000,
});

@connect()
class Projects extends Component {
  state = {};
  render() {
    return (
      <Container>
        <LoadableProjects />
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;
