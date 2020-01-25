import React from 'react';
import ReactGA from "react-ga";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-scroll';
import scrollLinks from '../constants/scrollLinks';
import Icon from './Icon';
import SwitchButton from './SwitchButton';
import SocialMedias from './SocialMedias';
import albertIcon from '../assets/icon.png';
import { BLOG_URL } from "../api/data";

class MobileNavbar extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    scrollDown: PropTypes.bool,
  };

  static defaultProps = {
    scrollDown: false,
  };

  state = { isMenuActive: false };

  componentDidMount = () => {
    window.addEventListener('wheel', this.preventScrolling);
  }

  componentWillUnmount = () => {
    window.removeEventListener('wheel', this.preventScrolling);
  }

  preventScrolling = (event) => {
    if (this.state.isMenuActive) event.preventDefault();
  }

  toggleMenu = () => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  };

  render() {
    const { isMenuActive } = this.state;
    const { scrollDown } = this.props;
    const { primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Container scrollDown={scrollDown} secondaryColor={secondaryColor}>
        <Link
          active="active"
          className="without-border"
          duration={500}
          href={scrollLinks.HOME.to}
          key={scrollLinks.HOME.to}
          smooth
          spy
          to={scrollLinks.HOME.to}
        >
          <Image src={albertIcon} alt="icon" />
        </Link>
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
            <MobileMenuContainer primaryColor={primaryColor} secondaryColor={secondaryColor} themeColor={themeColor}>
              <ButtonIcon column onClick={this.toggleMenu}>
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
                    onClick={() => {
                      this.toggleMenu();
                      ReactGA.event({
                        category: "Mobile Navigation",
                        action: scrollLink.to,
                      });
                    }}
                  >
                    {scrollLink.text}
                  </Link>
                ))}
                <a href={BLOG_URL} className="blog">
                  <span className="text">Blog</span>
                  <Icon className="arrow" name="arrow-right" color={primaryColor} />
                </a>
              </Links>
              <SocialMediasWithMargin
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                themeColor={themeColor}
                size="lg"
              />
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
  align-items: center;
  justify-content: space-between;
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  transition: transform 0.5s ease;
  background: ${props => props.secondaryColor};
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
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
  touch-action: none;
  .blog {
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.primaryColor};
    display: flex;
  }
  
  .text {
  }

  .arrow {
    transform: translateX(-5%);
    animation: slide 1s linear infinite;
  }
`;

const ButtonIcon = styled.button`
  align-self: ${props => (props.column ? 'flex-end' : 'center')};
  margin: ${props => (props.column ? `${props.theme.margin['4']}` : `0 ${props.theme.margin['4']}`)};
  border: none;
  border-radius: none;
  background: none;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  ${props => props.spaceBetween && 'justify-content: space-between'};
`;

const SocialMediasWithMargin = styled(SocialMedias)`
  position: absolute;
  bottom: 3rem;
  left: 1rem;
  a {
    margin: auto ${props => props.theme.margin['2']};
  }
  span {
    padding: 0;
  }
  align-self: center;
`;

const Image = styled.img`
  width: ${props => props.theme.width['8']};
  object-fit: scale-down;
  margin: ${props => props.theme.margin['1']} ${props => props.theme.margin['4']};
`;

export default withRouter(connect(state => ({ utils: state.utils }))(MobileNavbar));