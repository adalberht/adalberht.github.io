import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

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

export default function LoadingIndicator(props) {
  return (
    <Container className={props.className}>
      <Spinner color="blue" name="pacman" fadeIn="none" />
    </Container>
  );
}

LoadingIndicator.propTypes = {
  className: PropTypes.string
};

LoadingIndicator.defaultProps = {
  className: null
};
