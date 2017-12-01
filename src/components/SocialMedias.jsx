import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from './Icon';

const GITHUB = 'https://github.com/adalberht';
const MEDIUM = 'https://medium.com/@albertusangga/';
const LINKEDIN = 'https://www.linkedin.com/in/albertusangga/';
const FACEBOOK = 'https://www.facebook.com/profile.php?id=100000171038042';
const TWITTER = 'https://twitter.com/adalberht';
const MAIL = 'mailto:albertusangga.98@gmail.com?Subject=Hello';

@connect(state => ({ utils: state.utils }))
export default class SocialMedias extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    size: PropTypes.string,
  };

  static defaultProps = {
    size: '1x',
  };

  render() {
    const { size } = this.props;
    const { primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Container
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        themeColor={themeColor}
      >
        <a href={GITHUB} target="_blank">
          <Icon color={primaryColor} name="github" size={size} />
        </a>
        <a href={MEDIUM} target="_blank">
          <Icon color={primaryColor} name="medium" size={size} />
        </a>
        <a href={LINKEDIN} target="_blank">
          <Icon color={primaryColor} name="linkedin" size={size} />
        </a>
        <a href={FACEBOOK} target="_blank">
          <Icon color={primaryColor} name="facebook-official" size={size} />
        </a>
        <a href={TWITTER} target="_blank">
          <Icon color={primaryColor} name="twitter" size={size} />
        </a>
        <a href={MAIL} target="_top">
          <Icon color={primaryColor} name="envelope" size={size} />
        </a>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin: ${props => props.theme.margin['4']} 0;
  a + a{
    margin: ${props => props.theme.margin['2']};

  }
  span {
    padding: ${props => props.theme.padding['2']};
  }
  span:hover {
    background-color: ${props => props.primaryColor};
    color: ${props => props.secondaryColor};
  }
  @media screen and(max-width: ${props => props.theme.screens.sm}) {
    align-self: center;
    a {
      margin: ${props => props.theme.margin['1']};
      width: ${props => props.theme.width['8']};
    }
    span {
      padding: ${props => props.theme.padding['1']};
    }
  }
`;
