/*
  All API endpoints are listed here
  Rules & Styleguides:
  ->  To list a new endpoints, create a new variable (variable name is noun),
  ->  Each variable must be exported,
  ->  Even though it doesn't need any params,
      for consistency each variable must be an arrow function.
  ->  Block each variables according to the pages.
  ->  VERY IMPORTANT: ALL ENDPOINTS MUST ENDS WITH EXTRA SLASH '/'
*/

// Config is used to determine the endpoint according to the current set NODE_ENV
import config from "../config";

// Base endpoints of the API
export const base = uri => config.API_URL + uri;

export const auth = () => base("auth");
