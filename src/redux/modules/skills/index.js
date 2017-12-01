import * as api from '../../../api';

const REHYDRATE = 'persist/REHYDRATE';
const SKILLS_SET = 'skills/SKILLS_SET';
const LOADING = 'skills/LOADING';

const INITIAL_STATE = {
  strong: [],
  experienced: [],
  familiar: [],

  loading: false,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      if (!action.payload || !action.payload.skills) return state;
      return { ...action.payload.skills };
    case LOADING:
      return { ...state, loading: true };
    case SKILLS_SET:
      return { ...state, ...action.payload, loading: false };
    default:
      return { ...state };
  }
}

export const loading = () => ({ type: LOADING });

export const setSkills = skills => ({ type: SKILLS_SET, payload: { ...skills } });

export const loadSkills = () => (dispatch) => {
  dispatch(loading());
  const skills = api.getSkills();
  dispatch(setSkills(skills));
};
