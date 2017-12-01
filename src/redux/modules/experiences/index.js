import * as api from '../../../api';

const REHYDRATE = 'persist/REHYDRATE';
const EXPERIENCES_SET = 'experiences/EXPERIENCES_SET';
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
    case EXPERIENCES_SET:
      return { ...state, ...action.payload, loading: false };
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
