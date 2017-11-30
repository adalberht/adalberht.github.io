import theme from '../../../constants/theme';

console.log('importing theme');
console.log(theme);


const REHYDRATE = 'persist/REHYDRATE';
const THEME_INVERT = 'utils/THEME_INVERT';

const INITIAL_STATE = {
  isUsingLightTheme: true,
  primaryColor: theme.colors.black,
  secondaryColor: theme.colors.white,
  themeColor: theme.colors['blue-light'],
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

export function invertThemePayload({ isUsingLightTheme, primaryColor, secondaryColor }) {
  return {
    type: THEME_INVERT,
    payload: {
      isUsingLightTheme,
      primaryColor,
      secondaryColor,
    },
  };
}

export const invertTheme = () => (
  (dispatch, getState) => {
    const state = Object.assign({}, getState().utils);
    const { primaryColor, secondaryColor } = state;
    state.primaryColor = secondaryColor;
    state.secondaryColor = primaryColor;
    state.isUsingLightTheme = !state.isUsingLightTheme;
    dispatch(invertThemePayload(state));
  }
);
