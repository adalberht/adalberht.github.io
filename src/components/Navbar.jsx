import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import * as routes from '../constants/routes';

const Navbar = props => (
  <div className=" fixed w-full justify-between sm:hidden md:flex" {...props}>
    <div />
    <div className="flex text-white">
      <Link to={routes.HOME_ROUTE} spy={true} smooth={true} duration={500}>
        Home
      </Link>
      <Link to={routes.SKILLS_ROUTE} spy={true} smooth={true} duration={500}>
        Skill
      </Link>
    </div>
  </div>
);

export default Navbar;
