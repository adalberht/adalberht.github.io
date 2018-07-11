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
              <SectionTitle>Educations</SectionTitle>
              <Timeline color={primaryColor}>
                {educations.map(education => (
                  <TimelineEvent themeColor={themeColor} hideTimeline>
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
                        <span className="separator" />
                        <a href={education.website} className="institution">
                          {education.institution}
                        </a>
                      </div>
                      <div className="grade">{education.grade}</div>
                      <ul className="descriptions">
                        {education.descriptions.map(description => (
                          <li className="description">{description}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {education.tags.map(tag => <div className="tag">{tag}</div>)}
                      </div>
                    </div>
                  </TimelineEvent>
                ))}
              </Timeline>
              <SectionTitle>Work Experiences</SectionTitle>
              <Timeline id="timeline" color={primaryColor}>
                {works.map((work, index) => (
                  <TimelineEvent key={work.description} themeColor={themeColor}>
                    <div className="time-and-place">
                      <div className="place">{work.place}</div>
                      <div className="time">{work.time}</div>
                    </div>
                    <div className="image">
                      <img src={work.image} alt={work.place} />
                      {index < (works.length - 1) && <TimelineIndicator color={primaryColor} height={document.getElementById('timeline').clientHeight} />}
                    </div>
                    <div className="panel">
                      <div className="title">
                        <span className="role">{work.role}</span>
                        <span className="separator" />
                        <a href={work.website} className="institution">
                          {work.company}
                        </a>
                      </div>
                      <ul className="descriptions">
                        {work.descriptions.map(description => (
                          <li className="description">{description}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {work.tags.map(tag => <div className="tag">{tag}</div>)}
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

  .image {
    position: relative;
  }

  .panel {
    flex: 4;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: ${props => props.theme.margin['2']};
      @media screen and (max-width: ${props => props.theme.screens.sm}) {
        flex-direction: column;
        font-size: ${props => props.theme.textSizes.xl};
        align-items: flex-start;
      }
      > * {
        margin-right: ${props => props.theme.margin['2']};
      }
      .role {
        font-size: ${props => props.theme.textSizes.xl};
        font-weight: ${props => props.theme.fontWeights.bold};
      }
      .institution {
        color: ${props => props.themeColor};
        font-weight: ${props => props.theme.fontWeights.black};
        text-decoration: underline;
        font-size: ${props => props.theme.textSizes.lg};
        font-family: ${props => props.theme.fonts.sans};
      }
      .separator {
        content: '';
        width: 1rem;
        border: 1px solid ${props => props.primaryColor};
        @media screen and (max-width: ${props => props.theme.screens.sm}) {
          display: none;
        }
      }
    }

    .grade {
      font-weight: ${props => props.theme.fontWeights.bold};
      font-size: ${props => props.theme.textSizes.base};
      margin-bottom: ${props => props.theme.margin['2']};
    }

    .descriptions {
      font-family: ${props => props.theme.fonts.sans};
      text-align: justify;
      margin-bottom: ${props => props.theme.margin['4']};
      .description {
        margin-bottom: ${props => props.theme.margin['1']};
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
      .tag {
        color: ${props => props.themeColor};
        font-family: ${props => props.theme.fonts.mono};
        padding: ${props => props.theme.padding['1']};
        margin-top: ${props => props.theme.margin['2']};
        margin-right: ${props => props.theme.margin['2']};
        border-radius: ${props => props.theme.borderRadius.default};
        border: 2px solid ${props => props.themeColor};
        text-align: center;
      }
    }
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
  align-items: stretch;
  margin-bottom: ${props => props.theme.margin['8']};
  > * {
    margin-right: ${props => props.theme.margin['4']};
  }
  .time-and-place {
    flex: 1;
  }
  img {
    width: ${props => props.theme.width['12']};
    height: ${props => props.theme.width['12']};
    object-fit: contain;
    border-radius: ${props => props.theme.borderRadius.full};
    position: relative;
    z-index: 1;
    margin: 0 ${props => props.theme.margin['4']};
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

const TimelineIndicator = styled.div`
  display: initial;
  content: '';
  position: absolute;
  left: 50%;
  width: 2px;
  height: calc(100% + 2rem);
  background-color: ${props => props.color};
  z-index: 0;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    display: none;
  }
`;
