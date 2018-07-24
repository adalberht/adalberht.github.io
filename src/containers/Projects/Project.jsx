import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon';

export default function Project(props) {
  const { primaryColor, secondaryColor, themeColor } = props.utils;
  const { project } = props;
  return (
    <Container primaryColor={primaryColor} secondaryColor={secondaryColor} themeColor={themeColor} key={project.title}>
      {!!project.imageUrl && <Image src={project.imageUrl} alt={`${project.title} image`} />}
      <a className="title button-link" href={project.link} target="_blank">
        <span className="text">{project.title}</span>
        <Icon className="arrow" name="arrow-right" color={themeColor} />
      </a>
      {!!project.role && <div className="role">{project.role}</div>}
      <ul className="descriptions">
        {project.descriptions.map(description => <li className="description">{description}</li>)}
      </ul>
      <div className="tags">
        {project.tags.map(tag => <div className="tag">{tag}</div>)}
      </div>
    </Container>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    role: PropTypes.string,
    descriptions: PropTypes.array,
    tags: PropTypes.array.isRequired,
  }).isRequired,
  utils: PropTypes.shape({
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
  }).isRequired,
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.primaryColor};
  margin: ${props => props.theme.margin['8']} 0;
  .highlight {
    color: ${props => props.themeColor};
  }
  .button-link {
    color: ${props => props.primaryColor};
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    -webkit-transition: 0.5s;
    background: none;
    border-radius: 0;
    display: flex;
    transition: 0.5s;
    position: relative;
    @keyframes slide {
      0% {
        -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
        transform: translateX(0%);
      }
      50% {
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
      }
      100% {
        -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
        transform: translateX(0%);
      }
    }
    .text {
      font-weight: ${props => props.theme.fontWeights.bold};
      font-size: ${props => props.theme.textSizes['3xl']};
      font-family: ${props => props.theme.fonts.sans};
      text-align: center;
      @media screen and (max-width: ${props => props.theme.screens.sm}) {
        font-size: ${props => props.theme.textSizes['2xl']};
      }
    }
    .arrow {
      margin-left: ${props => props.theme.margin['2']};
      animation: slide 1s linear infinite;
    }
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
      flex-direction: column;
      align-items: center;
      .arrow {
        margin-bottom: ${props => props.theme.margin['2']};
      }
    }
  }
  .button-link:hover {
    .text {
      font-weight: bold;
    }
  }
  .role {
    font-size: ${props => props.theme.textSizes.xl};
    font-family: ${props => props.theme.fonts.mono};
    text-align: center;
  }
  .descriptions {
    font-family: ${props => props.theme.fonts.sans};
    width: 75%;
    .description {
      margin-bottom: ${props => props.theme.margin['1']};
      align-self: flex-start;
      text-align: justify;
      font-size: ${props => props.theme.textSizes.lg};
      @media screen and (max-width: ${props => props.theme.screens.sm}) {
        margin-left: -${props => props.theme.margin['8']};
        font-size: ${props => props.theme.textSizes.base};
      }
    }
  }
  .tags {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    .tag {
      color: ${props => props.themeColor};
      font-family: ${props => props.theme.fonts.mono};
      padding: ${props => props.theme.padding['1']};
      margin: ${props => props.theme.margin['2']};
      margin-left: 0;
      border-radius: ${props => props.theme.borderRadius.default};
      border: 2px solid ${props => props.themeColor};
      text-align: center;
    }
  }
`;

const Image = styled.img`
  max-width: 35%;
  object-fit: scale-down;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    max-width: 80%;
  }
`;
