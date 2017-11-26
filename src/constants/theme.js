/*
  All style variables are declared here
  - Fonts are used for font-family names
  - Colors are HEX values / rgb() values
  - Linear-gradients are linear-gradient CSS string
  - Declare all font-family names into const here and export it
*/

const linearGradient = {
  main: `
    background: -webkit-linear-gradient(90deg, #2a2f38, #333842 95%);
    background: linear-gradient(90deg, #2a2f38, #333842 95%)
  `,
};

const theme = {
  linearGradient,
};

export default theme;
