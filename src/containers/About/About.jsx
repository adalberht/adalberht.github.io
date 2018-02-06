import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { ABOUT_ROUTE } from '../../constants/routes';
import { invertTheme } from '../../redux/modules/utils';
import Icon from '../../components/Icon';
import profile from '../../assets/profile.jpg';
import SocialMedias from '../../components/SocialMedias';

@connect(state => ({ utils: state.utils }), { invertTheme })
class AboutComponent extends Component {
  static propTypes = {
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { isUsingLightTheme, primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Element name={ABOUT_ROUTE}>
        <Container
          isUsingLightTheme={isUsingLightTheme}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          themeColor={themeColor}
        >
          <Wrapper>
            <img src={profile} alt="albert's profile" />
            <SectionTitle>
              About <span className="highlight">Albert</span>
            </SectionTitle>
            <Description>
              I'm an aspiring <span className="bold highlight">Software Engineer</span>{' '}
              who is in a journey to become{' '}
              <span className="highlight">full-stack developer</span>.
            </Description>
            <Description>
              I used to have no interest in{' '}
              <span className="bold highlight">Front End Development</span> before I know{' '}
              <span className="bold">React.js</span>
            </Description>
            <Description>
              I got introduced to programming world when I was in high school through
              <span className="highlight"> Competitive Programming</span>. Even though I am not that
              competitive (yet), I do still enjoy competitive programming and can proudly say it's a
              part that shapes who I am.
            </Description>
            <SectionTitle>Random Facts</SectionTitle>
            <Description>
              I <span className="highlight">type quite fast</span> with more than{' '}
              <span className="bold">150 WPM</span> in average.
            </Description>
            <Description>
              I'm a <span className="bold">Japanese pop culture enthusiast </span>
              and still hoping that someday I can visit Japan.
            </Description>
          </Wrapper>
        </Container>
      </Element>
    );
  }
}

export default AboutComponent;

const Container = styled.div`
  align-items: flex-start;
  color: ${props => props.primaryColor};
  display: flex;
  font-family: ${props => props.theme.fonts.main};
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  .highlight {
    color: ${props => props.themeColor};
  }
  .bold {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  a {
    color: ${props => props.primaryColor};
  }
  img {
    border-radius: ${props => props.theme.borderRadius.full};
    width: ${props => props.theme.width['48']};
    object-fit: scale-down;
    margin: ${props => props.theme.margin['4']};
  }
`;

Container.propTypes = {
  themeColor: PropTypes.string.isRequired,
  isUsingLightTheme: PropTypes.bool,
};

Container.defaultProps = {
  isUsingLightTheme: false,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${props => props.theme.margin['8']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin: 0 ${props => props.theme.margin['4']};
  }
`;

const Description = styled.p`
  font-size: ${props => props.theme.textSizes.xl};
  font-family: ${props => props.theme.fonts.sans};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes.base};
  }
  margin-top: ${props => props.theme.margin['2']};
  margin-left: ${props => props.theme.margin['4']};
  margin-bottom: ${props => props.theme.margin['2']};
  margin-right: ${props => props.theme.margin['4']};
`;

const SectionTitle = styled.div`
  margin-top: ${props => props.theme.margin['2']};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.textSizes['2xl']};
`;

const UnmarginSocialMedias = styled(SocialMedias)`
  margin-top: 0;
`;
