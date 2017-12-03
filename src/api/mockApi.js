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
      grade: 'Current GPA: 3.98 / 4.00',
      role: 'Computer Science, Bachelor Degree',
      institution: 'University of Indonesia',
      description: `
        I get to pursue my passion since high school, Computer Science, in the largest and one of the best universities in Indonesia.
        My normal day-to-day activities as student are going to lecture, learn a lot of new things and frameworks, train in <b>Competitive Programming</b>,
        and maintaining my love and passion for coding.
      `,
      tags: ['Competitive Programming', 'Software Engineering', 'Web Development'],
    },
  ],
};

export const projects = [
  {
    title: 'Twiggsy',
    link: 'https://www.twiggsy.com',
    role: 'Lead Front End Engineer',
    description: [
      'Twiggsy is  a "Twibbon" redesign website',
      '',
    ],
    tags: ['JSX', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'styled-components', 'Webpack', 'npm'],
  },
  {
    title: 'Pekan Ristek Website',
    link: 'https://github.com/adalberht/pekan-ristek-frontend',
    role: 'Lead Developer',
    description: [
      '',
    ],
    tags: ['JSX', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'Webpack', 'npm'],
  },
  {
    title: 'albertusangga.tech (Personal Portfolio)',
    link: 'https://albertusangga.tech',
    role: 'Project Owner',
    description: [],
    tags: ['JSX', 'CSS', 'ReactJS', 'Redux', 'Webpack', 'UI Design', 'npm'],
  },
  {
    title: 'Android: Project Popular Movies 1',
    link: 'https://github.com/adalberht/android-project-popular-movies-1',
    role: 'Project Owner',
    description: [],
    tags: ['Android', 'Java'],
  },
];

