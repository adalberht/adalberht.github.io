module.exports = (options, req) => ({
  entry: 'src/index.jsx',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  html: {
    title: 'Albertus Angga',
    description: 'Personal portfolio website',
    favicon: './static/favicon.ico',
  },
  port: 3550,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
});
