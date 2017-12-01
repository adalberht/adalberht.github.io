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
    }).isRequired,
    loadSkills: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadSkills();
  }

  render() {
    const { isUsingLightTheme, primaryColor, secondaryColor, themeColor } = this.props.utils;
    const { strong, experienced, familiar, loading } = this.props.skills;
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
          <Flex>
            <Title color={themeColor}>Skills</Title>
            <SkillSection>
              <div className="highlight bold section-title">Strong</div>
              {strong.map(skill => <div>{skill}</div>)}
            </SkillSection>
            <SkillSection>
              <div className="highlight bold section-title">Experienced</div>
              {experienced.map(skill => <div>{skill}</div>)}
            </SkillSection>
            <SkillSection>
              <div className="highlight bold section-title">Familiar</div>
              {familiar.map(skill => <div>{skill}</div>)}
            </SkillSection>
          </Flex>
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
    font-size: ${props => props.theme.textSizes['xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  .bold {
    font-weight: ${props => props.theme.fontWeights.bold};
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
  color: ${props => props.color};
  font-size: ${props => props.theme.textSizes['5xl']};
  align-self: flex-start;
  text-transform: uppercase;
  margin-left: ${props => props.theme.margin['4']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['3xl']};
    margin-left: ${props => props.theme.margin['4']};
  }
  flex: 1;
`;

const Flex = styled.div`
  display: flex;
  margin: ${props => props.theme.margin['4']};
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
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
  .section-title {
    margin-left: ${props => props.theme.margin['4']};
  }
  > * {
    margin-left: ${props => props.theme.margin['8']};
  }
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin-left: 0;
  }
`;
