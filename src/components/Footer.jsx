import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SocialMedias from './SocialMedias';

const REPOSITORY = 'https://github.com/adalberht/adalberht.github.io';

@connect(state => ({ utils: state.utils }))
export default class Footer extends React.Component {
  static propTypes = {
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { primaryColor, secondaryColor, themeColor } = this.props.utils;
    return (
      <Container primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <CenterSocialMedias primaryColor={secondaryColor} secondaryColor={primaryColor} themeColor={themeColor} />
        <Copyright>&copy; 2017 - Design and Code by Albertus Angga Raharja</Copyright>
        <div>Built with React, Redux, styled-component and tailwindcss.</div>
        <div>Code for this project is open sourced <a href={REPOSITORY}>here</a>.</div>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  min-height: ${props => props.theme.height['24']};
  background-color: ${props => props.primaryColor};
  color: ${props => props.secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    text-align: center;
  }
  div:2th-last-child {
    background: white;
  }
  div:last-child {
    margin: 2rem;
    font-style: italic;
  }
`;

const Copyright = styled.div`
`;

const CenterSocialMedias = styled(SocialMedias)`
  align-self: center;
`;
