import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';
import SwitchButton from './SwitchButton';
import * as routes from '../constants/routes';

@connect(state => ({ utils: state.utils }))
export default class Navbar extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { primaryColor, themeColor } = this.props.utils;
    return (
      <Container primaryColor={primaryColor} themeColor={themeColor}>
        <SwitchButton />
        <div className="flex text-white">
          <Link to={routes.HOME_ROUTE} spy smooth duration={1000}>
            Home
          </Link>
          <Link to={routes.SKILLS_ROUTE} spy smooth duration={1000}>
            Skill
          </Link>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  display: flex;
  color: ${props => props.primaryColor};
  font-family: ${props => props.theme.fonts.mono};
  .highlight {
    ${props => props.themeColor};
  }

  a {
    margin: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    display: none;
  }
`;

Container.propTypes = {
  primaryColor: PropTypes.string,
  themeColor: PropTypes.string,
};

Container.defaultProps = {
  primaryColor: 'black',
  themeColor: 'black',
};

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
`;

Flex.propTypes = {
  column: PropTypes.bool,
};

Flex.defaultProps = {
  column: false,
};