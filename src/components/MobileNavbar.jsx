import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import * as routes from '../constants/routes';

export default class MobileNavbar extends React.Component {
  state = { isHamburgerPressed: false };
  render() {
    return (
      <div className="w-full flex justify-between md:hidden">
        <div />
        <div className="flex">
          <Link to={routes.HOME_ROUTE}>Home</Link>
          <Link to={routes.SKILLS_ROUTE}>Skill</Link>
        </div>
      </div>
    );
  }
}
