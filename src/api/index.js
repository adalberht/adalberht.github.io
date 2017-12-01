import defaults from 'superagent-defaults';
// import * as apiUrl from '../constants/apiUrl';
import * as mockApi from './mockApi';

export const request = defaults();

export function getSkills() {
  return mockApi.skills;
}

export function getProjects() {
  return mockApi.projects;
}

export function getExperiences() {
  return mockApi.experiences;
}

