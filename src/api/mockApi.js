// TO-DO: Make API
import uiImageUrl from '../assets/makara-ui-fasilkom.jpg';
import stoqoImageUrl from '../assets/stoqo.png';

export const skills = {
  strong: [
    'C++',
    'Python',
    'Java',
    'JavaScript (ES6)',
    'HTML',
    'CSS',
    'ReactJS',
    'styled-components',
  ],
  experienced: ['Git', 'Django', 'Django-REST', 'Redux', 'Webpack'],
  familiar: ['PHP', 'Go', 'Android', 'Angular'],
};

export const experiences = {
  works: [
    {
      place: 'Jakarta, Indonesia',
      time: "Sep '17 - Nov '17",
      image: stoqoImageUrl,
      role: 'Part Time Software Engineer',
      company: 'Stoqo',
      website: 'https://www.stoqo.com',
      description: 'Maintain and continue adding features to internal tool codebase. ',
      tags: [
        'Python',
        'Django',
        'Django-REST',
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'styled-components',
      ],
    },
    {
      place: 'Jakarta, Indonesia',
      time: "Jun '17 - Aug '17",
      image: stoqoImageUrl,
      role: 'Software Engineer Intern',
      company: 'Stoqo',
      website: 'https://www.stoqo.com',
      description: 'Developed internal tool, customer dashboard and merchant platform website',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'styled-components', 'Django'],
    },
    {
      place: 'Depok, Indonesia',
      time: "Aug '17 - Dec '17",
      image: uiImageUrl,
      role: 'Assistant Lecturer',
      company: 'Universitas Indonesia',
      website: 'http://cs.ui. ac.id',
      description:
        'Tutors and grades CS Freshman student’s lab submissions & tasks for "Fundamentals of Programming I" course using Python programming language',
      tags: ['Python'],
    },
  ],
  educations: [
    {
      place: 'Depok, Indonesia',
      time: "Aug '16 - present",
      image: uiImageUrl,
      role: 'Computer Science, Bachelor Degree',
      institution: 'University of Indonesia',
      description: 'I studied Computer Science at one of the best university in Indonesia.',
      tags: [],
    },
  ],
};

export const projects = {};
