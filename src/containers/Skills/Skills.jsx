import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { SKILLS_ROUTE } from '../../constants/routes';
import { loadSkills } from '../../redux/modules/skills';
import Icon from '../../components/Icon';
import LoadingIndicator from '../../components/LoadingIndicator';

@connect(state => ({ ...state }), { loadSkills })
class SkillsComponent extends Component {
  static propTypes = {
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    skills: PropTypes.shape({
      strong: PropTypes.array.isRequired,
      experienced: PropTypes.array.isRequired,
      familiar: PropTypes.array.isRequired,
      achievements: PropTypes.array.isRequired,
    }).isRequired,
    loadSkills: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadSkills();
  }

  render() {
    const { isUsingLightTheme, primaryColor, secondaryColor, themeColor } = this.props.utils;
    const { strong, experienced, familiar, achievements, loading } = this.props.skills;
    if (loading) {
      return (
        <Element name={SKILLS_ROUTE}>
          <LoadingIndicator />
        </Element>
      );
    }
    return (
      <Element name={SKILLS_ROUTE}>
        <Container
          isUsingLightTheme={isUsingLightTheme}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          themeColor={themeColor}
        >
          <Title color={primaryColor}>Skills</Title>
          {/* <Flex>
            <p>
              Currently, my strength lies more in{' '}
              <span className="highlight">front end development</span>. I enjoy learning new
              frameworks, language and code that solves{' '}
              <span className="bold highlight">technical challenges</span>.
            </p>
          </Flex> */}
          <Flex>
            <SkillSection>
              <div className="highlight bold section-title">Strong</div>
              {strong && strong.map(skill => <div>{skill}</div>)}
            </SkillSection>
            <SkillSection>
              <div className="highlight bold section-title">Experienced</div>
              {experienced && experienced.map(skill => <div>{skill}</div>)}
            </SkillSection>
            <SkillSection>
              <div className="highlight bold section-title">Familiar</div>
              {familiar && familiar.map(skill => <div>{skill}</div>)}
            </SkillSection>
          </Flex>
          <Title color={primaryColor}>Achievements</Title>
          {achievements && achievements.map(achievement => (
            <div className="achievement" key={achievement.title}>
              <div className="flex">
                <Icon name="trophy" color={primaryColor} className="achievement" />
                <div className="achievement-title">
                  <span className="achievement-tag">{achievement.tag}</span>
                  <span className="achievement-title-text">{achievement.title}</span>
                </div>
              </div>
              <ul>
                <li>{achievement.description}</li>
              </ul>
            </div>
          ))}
        </Container>
      </Element>
    );
  }
}

export default SkillsComponent;

const Container = styled.div`
  align-items: center;
  color: ${props => props.primaryColor};
  display: flex;
  font-family: ${props => props.theme.fonts.main};
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  .highlight {
    color: ${props => props.themeColor};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  .bold {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  .achievement {
    align-self: flex-start;
    margin: 0 ${props => props.theme.margin['2']};
    .flex {
      display: flex;
      align-self: flex-start;
    }
    .achievement-tag {
      color: ${props => props.themeColor};
    }
    ul {
      margin-top: 0;
    }
    li {
      font-family: ${props => props.theme.fonts.sans};
    }
    span {
      margin-right: ${props => props.theme.margin['2']};
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

const Title = styled.div`
  align-self: flex-start;
  color: ${props => props.color};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.textSizes['5xl']};
  margin: ${props => props.theme.margin['4']} 0;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['3xl']};
    margin-left: ${props => props.theme.margin['4']};
  }
`;

const Flex = styled.div`
  display: flex;
  margin: ${props => `${props.theme.margin['2']} ${props.theme.margin['8']}`};
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > * {
      margin: ${props => props.theme.margin['4']} auto;
    }
  }
  p {
    margin: 0 ${props => props.theme.margin['4']};
    font-family: ${props => props.theme.fonts.sans};
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
  .section-title {
    font-size: ${props => props.theme.textSizes['2xl']};
    font-family: ${props => props.theme.fonts.sans};
    margin-left: ${props => props.theme.margin['4']};
  }
  > * {
    margin-left: ${props => props.theme.margin['8']};
  }
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin-left: 0;
  }
`;
