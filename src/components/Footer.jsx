import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SocialMedias from './SocialMedias';

const REPOSITORY = 'https://github.com/adalberht/adalberht.github.io';

class Footer extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Container primaryColor={primaryColor} secondaryColor={secondaryColor} themeColor={themeColor}>
        <CenterSocialMedias primaryColor={primaryColor} secondaryColor={secondaryColor} themeColor={themeColor} />
        <Copyright>Albertus Angga Raharja &copy; {new Date().getFullYear()}</Copyright>
      </Container>
    );
  }
}

const Container = styled.div`
  -webkit-transition: 1s;
  transition: 1s;
  width: 100%;
  min-height: ${props => props.theme.height['24']};
  background-color: ${props => props.secondaryColor};
  color: ${props => props.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.sans};
  div {
    text-align: center;
  }
  div: 2th-last-child {
    background: white;
  }
  div:last-child {
    margin-bottom: 1.5rem;
  }
  a {
    color: ${props => props.themeColor};
  }
`;

const Copyright = styled.div`
  font-size: 1.25rem;
  margin-top: 0.25rem;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: 1rem;
  }
`;

const CenterSocialMedias = styled(SocialMedias)`
  align-self: center;
  margin: 0 auto;
`;

export default connect(state => ({ utils: state.utils }))(Footer);