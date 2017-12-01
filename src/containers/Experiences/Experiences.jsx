import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { EXPERIENCES_ROUTE } from '../../constants/routes';
import { loadExperiences } from '../../redux/modules/experiences';
import Icon from '../../components/Icon';
import LoadingIndicator from '../../components/LoadingIndicator';


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
              <ul>
                {works.map(work => (
                  <li>
                    <pre>
                      <code>
                        {JSON.stringify(work, 2, 2)}
                      </code>
                    </pre>
                  </li>
                ))}
              </ul>
              <SectionTitle>Educations</SectionTitle>
              <ul>
                {educations.map(education => (
                  <li>
                    <pre>
                      <code>
                        {JSON.stringify(education, 2, 2)}
                      </code>
                    </pre>
                  </li>
                ))}
              </ul>
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
  font-family: ${props => props.theme.fonts.main};
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
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
