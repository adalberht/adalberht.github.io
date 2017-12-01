import * as api from '../../../api';

const REHYDRATE = 'persist/REHYDRATE';
const PROJECTS_SET = 'experiences/PROJECTS_SET';
const LOADING = 'experiences/LOADING';

const INITIAL_STATE = {
  education: [],
  work: [],
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      if (!action.payload || !action.payload.experiences) return state;
      return { ...action.payload.experiences };
    case LOADING:
      return { ...state, loading: true };
    case PROJECTS_SET:
      return { ...state, ...action.payload, loading: false };
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
