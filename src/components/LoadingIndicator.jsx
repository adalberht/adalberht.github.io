import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  animation: fadein 1s;
  @keyframes fadein {
    overflow-y: hidden;
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

class LoadingIndicator extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    utils: PropTypes.shape({
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    className: null,
  }

  render() {
    const { themeColor } = this.props.utils;
    return (
      <Container className={this.props.className}>
        <Spinner color={themeColor} name="pacman" fadeIn="none" />
      </Container>
    );
  }
}

export default connect(state => ({ utils: state.utils }))(LoadingIndicator);
