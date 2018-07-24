const config = {
  production: {
    API_URL: "https://website.com/"
  },
  development: {
    API_URL: "http://dev.website.com/"
  },
  local: {
    API_URL: "http://localhost:8000/"
  }
};

export default config[process.env.NODE_ENV || "development"];
