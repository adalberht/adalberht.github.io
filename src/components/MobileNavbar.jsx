import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Icon from './Icon';
import SwitchButton from './SwitchButton';
import * as routes from '../constants/routes';

export default class MobileNavbar extends React.Component {
  static propTypes = {
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
  }

  state = { isMenuActive: false };

  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  }

  render() {
    const { isMenuActive } = this.state;
    return (
      <div className="w-full fixed z-10 flex justify-between md:hidden">
        <SwitchButton className="md:hidden" />
        <div className="flex">
          {!isMenuActive &&
            <button onClick={this.toggleMenu}>
              <Icon
                className="m-4"
                name="bars"
                size="2x"
                color={this.props.primaryColor}
              />
            </button>
          }
          {isMenuActive &&
            <MobileMenuContainer
              primaryColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            >
              <button className="self-end" onClick={this.toggleMenu}>
                <Icon
                  className="m-4"
                  name="times"
                  size="2x"
                  color={this.props.primaryColor}
                />
              </button>
              <div className="container mx-auto flex flex-col">
                <Link
                  duration={500}
                  onClick={this.toggleMenu}
                  smooth
                  spy
                  to={routes.HOME_ROUTE}
                >
                  Home
                </Link>
                <Link
                  duration={500}
                  onClick={this.toggleMenu}
                  smooth
                  spy
                  to={routes.SKILLS_ROUTE}
                >
                  Skill
                </Link>
              </div>
            </MobileMenuContainer>}
        </div>
      </div>
    );
  }
}

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  background: ${props => props.secondaryColor};
  color: ${props => props.primaryColor};
  display: flex;
  flex-direction: column;
  a {
    margin: 2rem;
    font-size: ${props => props.theme.textSizes['3xl']};
    font-family: ${props => props.theme.fonts.mono.reduce((prev, cur) => `${prev}, ${cur}`, '')};
  }
`;
