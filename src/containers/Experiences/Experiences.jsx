import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { EXPERIENCES_ROUTE } from '../../constants/routes';
import { loadExperiences } from '../../redux/modules/experiences';
import Icon from '../../components/Icon';
import LoadingIndicator from '../../components/LoadingIndicator';
import About from '../About/index';

@connect(state => ({ utils: state.utils, experiences: state.experiences }), { loadExperiences })
class ExperiencesComponent extends Component {
  static propTypes = {
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    experiences: PropTypes.shape({
      loaded: PropTypes.bool.isRequired,
      works: PropTypes.object.isRequired,
      educations: PropTypes.object.isRequired,
    }).isRequired,
    loadExperiences: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (!this.props.experiences.loaded) this.props.loadExperiences();
  }

  render() {
    const { isUsingLightTheme, primaryColor, secondaryColor, themeColor } = this.props.utils;
    const { loading, works, educations } = this.props.experiences;
    return (
      <Element name={EXPERIENCES_ROUTE}>
        <Container
          isUsingLightTheme={isUsingLightTheme}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          themeColor={themeColor}
        >
          {loading && <LoadingIndicator />}
          {!loading && (
            <Flex>
              <SectionTitle>Work Experiences</SectionTitle>
              <Timeline color={primaryColor}>
                {works.map(work => (
                  <TimelineEvent themeColor={themeColor}>
                    <div className="time-and-place">
                      <div className="place">{work.place}</div>
                      <div className="time">{work.time}</div>
                    </div>
                    <div className="image">
                      <img src={work.image} alt={work.place} />
                    </div>
                    <div className="panel">
                      <div className="title">
                        <span className="role">{work.role}</span>
                        <span>-</span>
                        <a href={work.website} className="institution">{work.company}</a>
                      </div>
                      <div className="description">{work.description}</div>
                      <div className="tags">
                        {work.tags.map(tag => <div className="tag">{tag}</div>)}
                      </div>
                    </div>
                  </TimelineEvent>
                ))}
              </Timeline>
              <SectionTitle>Educations</SectionTitle>
              <Timeline color={primaryColor}>
                {educations.map(education => (
                  <TimelineEvent themeColor={themeColor}>
                    <div className="time-and-place">
                      <div className="place">{education.place}</div>
                      <div className="time">{education.time}</div>
                    </div>
                    <div className="image">
                      <img src={education.image} alt={education.place} />
                    </div>
                    <div className="panel">
                      <div className="title">
                        <span className="role">{education.role}</span>
                        <span>-</span>
                        <a href={education.website} className="institution">{education.institution}</a>
                      </div>
                      <div className="description">{education.description}</div>
                      <div className="tags">
                        {education.tags.map(tag => <div className="tag">{tag}</div>)}
                      </div>
                    </div>
                  </TimelineEvent>
                ))}
              </Timeline>
            </Flex>
          )}
        </Container>
      </Element>
    );
  }
}

export default ExperiencesComponent;

const Container = styled.div`
  align-items: center;
  color: ${props => props.primaryColor};
  display: flex;
  font-family: ${props => props.theme.fonts.sans};
  flex-direction: column;
  min-height: 100vh;
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
  .institution {
    color: ${props => props.themeColor};
  }
`;

Container.propTypes = {
  themeColor: PropTypes.string.isRequired,
  isUsingLightTheme: PropTypes.bool,
};

Container.defaultProps = {
  isUsingLightTheme: false,
};

const SectionTitle = styled.div`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.textSizes['3xl']};
  margin: ${props => props.theme.margin['4']};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Timeline = styled.ul`
  vertical-align: middle;
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  &::before {
    display: initial;
    bottom: 15rem;
    content: '';
    position: absolute;
    top: 0;
    left: calc(15% + 4.5rem);
    width: 2px;
    height: 75%;
    background-color: ${props => props.color};
  }
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    &::before {
      display: none;
    }
    margin-left: 1rem;
    margin-right: 1rem;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
`;

const TimelineEvent = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.margin['8']};
  > * {
    margin-right: ${props => props.theme.margin['4']};
  }
  img {
    width: ${props => props.theme.width['12']};
    height: ${props => props.theme.width['12']};
    object-fit: contain;
    border-radius: ${props => props.theme.borderRadius.full};
  }
  .time-and-place {
    width: 15%;
  }
  .image {
    position: relative;
    min-height: 1px;
    z-index: 1;
  }
  .image::after {
    content: ' ';
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    height: calc(100% + 6px);
    border-radius: 100%;
    background: ${props => props.theme.colors.gray};
    border: 2px solid #e4e4e4;
    width: calc(100% + 6px);
    z-index: 0;
  }
  .role {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  .institution {
  }
  .panel {
    width: 75%;
    .title {
      > * {
        margin-right: ${props => props.theme.margin['2']};
      }
    }
  }
  .tags {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .tag {
      font-family: ${props => props.theme.fonts.mono};
      padding: ${props => props.theme.padding['1']};
      margin: ${props => props.theme.margin['1']};
      margin-left: 0;
      border-radius: ${props => props.theme.borderRadius.default};
      border: 2px solid ${props => props.themeColor};
    }
  }
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    flex-direction: column;
    .time-and-place {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .image {
      margin: ${props => props.theme.margin['2']};
    }
  }
`;
