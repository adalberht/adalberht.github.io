import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import SwitchButton from './SwitchButton';
import * as routes from '../constants/routes';

const Navbar = styled(props => (
  <div className={`fixed w-full z-10 justify-between sm:hidden md:flex ${props.className}`}>
    <SwitchButton />
    <div className="flex text-white">
      <Link to={routes.HOME_ROUTE} spy smooth duration={1000}>
        Home
      </Link>
      <Link to={routes.SKILLS_ROUTE} spy smooth duration={1000}>
        Skill
      </Link>
    </div>
  </div>
))`
  a {
    margin: 1rem;
    cursor: pointer;
  }
  position: fixed;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    display: none;
  }
`;

export default Navbar;
