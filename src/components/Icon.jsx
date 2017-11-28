import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Icon = styled(FontAwesome)`
  color: ${props => props.color};
`;

Icon.propTypes = {
  color: PropTypes.string,
};

Icon.defaultProps = {
  color: 'black',
};

export default Icon;
