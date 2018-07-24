import tailwindConfig from "../tailwind.config";
/*
  All style variables are declared here
  - Fonts are used for font-family names
  - Colors are HEX values / rgb() values
  - Linear-gradients are linear-gradient CSS string
  - Declare all font-family names into const here and export it
*/

const linearGradients = {
  main: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"
};

const fonts = {};

Object.keys(tailwindConfig.fonts).forEach(font => {
  fonts[font] = tailwindConfig.fonts[font].reduce(
    (prev, current, index) => (index === 0 ? current : `${prev}, ${current}`),
    ""
  );
});

fonts.main = fonts.mono;

const theme = {
  linearGradients,
  ...tailwindConfig,
  fonts
};

export default theme;
