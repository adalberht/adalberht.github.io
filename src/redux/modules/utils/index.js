import theme from '../../../constants/theme';

const REHYDRATE = 'persist/REHYDRATE';
const THEME_INVERT = 'utils/THEME_INVERT';


// Colors

const PRIMARY_COLOR = theme.colors.black; // Default fonts color
const SECONDARY_COLOR = theme.colors.white; // Default background color

const THEME_COLOR = theme.colors['blue-light'];
const DARKER_THEME_COLOR = theme.colors['blue-dark'];

const INITIAL_STATE = {
  isUsingLightTheme: true,
  primaryColor: PRIMARY_COLOR,
  secondaryColor: SECONDARY_COLOR,
  themeColor: THEME_COLOR,
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      if (!action.payload || !action.payload.utils) return state;
      return { ...action.payload.utils };
    case THEME_INVERT:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

export function invertThemePayload(newTheme) {
  return {
    type: THEME_INVERT,
    payload: { ...newTheme },
  };
}

export const invertTheme = () => (
  (dispatch, getState) => {
    const state = Object.assign({}, getState().utils);
    const { primaryColor, secondaryColor } = state;
    state.primaryColor = secondaryColor;
    state.secondaryColor = primaryColor;
    state.themeColor = state.themeColor === THEME_COLOR ? DARKER_THEME_COLOR : THEME_COLOR;
    state.isUsingLightTheme = !state.isUsingLightTheme;
    dispatch(invertThemePayload(state));
  }
);
