import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import LoadingIndicator from '../../components/LoadingIndicator';
import { PROJECTS_ROUTE } from '../../constants/routes';
import { loadProjects } from '../../redux/modules/projects';


const LoadableProject = Loadable({
  loader: () => import('./Project'),
  loading: LoadingIndicator,
  render(loaded, props) {
    const LoadedProject = loaded.default;
    return <LoadedProject {...props} />;
  },
});

@connect(state => ({ projects: state.projects, utils: state.utils }), { loadProjects })
class Projects extends Component {
  static propTypes = {
    projects: PropTypes.shape({
      projects: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    utils: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
      themeColor: PropTypes.string.isRequired,
    }).isRequired,
    loadProjects: PropTypes.func.isRequired,
  };

  componentDidMount = async () => {
    await this.props.loadProjects();
  };

  render() {
    const { utils } = this.props;
    const { primaryColor } = utils;
    const { projects, loading } = this.props.projects;
    return (
      <Container>
        <Element name={PROJECTS_ROUTE}>
          <Wrapper>
            <Title color={primaryColor}>Projects</Title>
            {loading && <LoadingIndicator />}
            {!loading && projects.map(project => <LoadableProject project={project} utils={utils} />)}
          </Wrapper>
        </Element>
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.textSizes['3xl']};
  color: ${props => props.color};
  margin: ${props => props.theme.margin['8']};
  align-self: flex-start;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin: auto;
  }
`;
