import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import Icon from './Icon';
import SwitchButton from './SwitchButton';
import * as routes from '../constants/routes';

@connect(state => ({ utils: state.utils }))
export default class MobileNavbar extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = { isMenuActive: false };

  toggleMenu = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  }

  render() {
    const { isMenuActive } = this.state;
    return (
      <Container>
        <div />
        <Flex>
          {!isMenuActive &&
            <Flex>
              <SwitchButton />
              <MenuButton onClick={this.toggleMenu}>
                <Icon
                  className="m-4"
                  name="bars"
                  size="2x"
                  color={this.props.utils.primaryColor}
                />
              </MenuButton>
            </Flex>
          }
          {isMenuActive &&
            <MobileMenuContainer
              primaryColor={this.props.utils.primaryColor}
              secondaryColor={this.props.utils.secondaryColor}
            >
              <button className="self-end" onClick={this.toggleMenu}>
                <Icon
                  className="m-4"
                  name="times"
                  size="2x"
                  color={this.props.utils.primaryColor}
                />
              </button>
              <Links>
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
              </Links>
            </MobileMenuContainer>}
        </Flex>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.screens.sm}) {
    display: none;
    button {
      display: none;
    }
  }
`;

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
    font-family: ${props => props.theme.fonts.mono};
  }
`;

const MenuButton = styled.button`
  align-self: flex-end;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
`;
