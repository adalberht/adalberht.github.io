import React, { Component } from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: LoadingIndicator,
  timeout: 10000000,
  delay: 1000000,
});

class Home extends Component {
  state = {}
  render() {
    return (
      <LoadableHome />
    );
  }
}

export default Home;
