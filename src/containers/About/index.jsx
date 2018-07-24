import React, {Component} from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadableAbout = Loadable({
  loader: () => import('./About'),
  loading: LoadingIndicator,
  timeout: 10000000,
  delay: 1000000,
});

class About extends Component {
  state = {};
  render() {
    return (
      <Container>
        <LoadableAbout />
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    width: 100%;
  }
`;

export default About;
