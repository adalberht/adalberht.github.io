import * as api from '../../../api';

const REHYDRATE = 'persist/REHYDRATE';
const PROJECTS_SET = 'projects/PROJECTS_SET';
const LOADING = 'projects/LOADING';

const INITIAL_STATE = {
  projects: [],
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      if (!action.payload || !action.payload.projects) return state;
      return { ...action.payload.projects };
    case LOADING:
      return { ...state, loading: true };
    case PROJECTS_SET:
      return { ...state, projects: action.payload, loading: false };
    default:
      return { ...state };
  }
}

export const loading = () => ({ type: LOADING });

export const setProjects = payload => ({ type: PROJECTS_SET, payload });

export const loadProjects = () => (dispatch) => {
  dispatch(loading());
  const projects = api.getProjects();
  dispatch(setProjects(projects));
};
