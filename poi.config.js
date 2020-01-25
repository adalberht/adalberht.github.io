module.exports = (options, req) => ({
  entry: "src/index.jsx",
  envs: {
    NODE_ENV: process.env.NODE_ENV || "development"
  },
  output: {
    html: {
      title: "Albertus Angga Raharja",
      description: "Albertus Angga's portfolio site",
      favicon: "./static/favicon.ico"
    }
  },
  devServer: {
    port: 3550
  }
});
