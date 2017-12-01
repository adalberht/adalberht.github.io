import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import Icon from './Icon';
import SwitchButton from './SwitchButton';
import scrollLinks from '../constants/scrollLinks';
import SocialMedias from './SocialMedias';

@connect(state => ({ utils: state.utils }))
export default class MobileNavbar extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    scrollDown: PropTypes.bool,
    scrollUp: PropTypes.bool,
  };

  static defaultProps = {
    scrollDown: false,
    scrollUp: false,
  };

  state = { isMenuActive: false };

  toggleMenu = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  };

  render() {
    const { isMenuActive } = this.state;
    const { scrollDown } = this.props;
    const { primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Container scrollDown={scrollDown} secondaryColor={secondaryColor}>
        <div />
        <Flex>
          {!isMenuActive && (
            <Flex>
              <SwitchButton />
              <ButtonIcon onClick={this.toggleMenu}>
                <Icon name="bars" size="2x" color={primaryColor} />
              </ButtonIcon>
            </Flex>
          )}
          {isMenuActive && (
            <MobileMenuContainer
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            >
              <ButtonIcon onClick={this.toggleMenu}>
                <Icon name="times" size="2x" color={primaryColor} />
              </ButtonIcon>
              <Links>
                {Object.values(scrollLinks).map(scrollLink => (
                  <Link
                    duration={500}
                    key={scrollLink.to}
                    smooth
                    spy
                    to={scrollLink.to}
                    onClick={this.toggleMenu}
                  >
                    {scrollLink.text}
                  </Link>
                ))}
              </Links>
              <SocialMediasWithMargin primaryColor={primaryColor} secondaryColor={secondaryColor} themeColor={themeColor} />
            </MobileMenuContainer>
          )}
        </Flex>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  transition: transform 0.5s ease;
  background: ${props => props.secondaryColor};
  box-shadow: ${props => props.theme.shadows.md};
  ${props =>
    props.scrollDown &&
    `
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -ms-transform: translateX(-100%);
  `};
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
    margin: ${props => `${props.theme.margin['3']} ${props.theme.margin['4']}`};
    font-size: ${props => props.theme.textSizes['3xl']};
    font-family: ${props => props.theme.fonts.mono};
  }
`;

const ButtonIcon = styled.button`
  align-self: flex-end;
  margin: ${props => props.theme.margin['4']};
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
`;

const SocialMediasWithMargin = styled(SocialMedias)`
  margin-top: 30%;
  margin-bottom: ${props => props.theme.margin['4']};
  span {
    padding: 0;
  }
  align-self: center;
`;
