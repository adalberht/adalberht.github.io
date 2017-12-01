import * as api from '../../../api';

const REHYDRATE = 'persist/REHYDRATE';
const EXPERIENCES_SET = 'experiences/EXPERIENCES_SET';
const LOADING = 'experiences/LOADING';

const INITIAL_STATE = {
  educations: [],
  works: [],
  loading: false,
  loaded: false,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
   case LOADING:
      return { ...state, loading: true };
    case EXPERIENCES_SET:
      return { ...state, ...action.payload, loading: false, loaded: true };
    default:
      return { ...state };
  }
}

export const loading = () => ({ type: LOADING });

export const setExperiences = payload => ({ type: EXPERIENCES_SET, payload });

export const loadExperiences = () => (dispatch) => {
  dispatch(loading());
  const experiences = api.getExperiences();
  dispatch(setExperiences(experiences));
};
