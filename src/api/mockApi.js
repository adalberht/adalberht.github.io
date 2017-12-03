// TO-DO: Make API
import uiImageUrl from '../assets/makara-ui-fasilkom.jpg';
import stoqoImageUrl from '../assets/stoqo.png';
import projectAndroidImageUrl from '../assets/project-android.png';
import projectPortfolioImageUrl from '../assets/project-portfolio.png';
import projectPekanRistekImageUrl from '../assets/project-pekan-ristek.png';
import projectTwiggsyImageUrl from '../assets/project-twiggsy.png';

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
  achievements: [
    {
      tag: '[International]',
      title: 'Finalist (Top 50), 2017 ACM-ICPC Asia Jakarta Regional Contest',
      description:
        'An ICPC-style programming competition attended by 80 teams. Advanced to finals through fierce competition between more than 500 teams.',
    },
    {
      tag: '[National]',
      title: 'Finalist (Top 20), 2017 ACM-ICPC Maranatha Provincial Contest',
      description: 'An ICPC-style programming competition attended by more than 100 teams.',
    },
    {
      tag: '[National]',
      title: '1st Runner-Up, Programming Competition Session (PCS) JOINTS 2015',
      description:
        'A IOI-style programming competition held by Universitas Gadjah Mada for highschool students. Placed 4 out of ± 30 finalist.',
    },
  ],
};

export const experiences = {
  works: [
    {
      place: 'Jakarta, Indonesia',
      time: "Jun '17 - Aug '17",
      image: stoqoImageUrl,
      role: 'Software Engineering Intern',
      company: 'Stoqo',
      website: 'https://www.stoqo.com',
      descriptions: [
        'Improved company day to day operation by creating internal tool website using React, Redux, and Django-REST that tracks more than 1000 orders and 100 stores.',
        'Implemented customer dashboard website by using React and Redux that is used by more than 100 customers to track their orders.',
        'Improved marketplace automation by creating merchant platform website that allows supplier to add products in the marketplace using React, Redux and Algolia.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'styled-components', 'Django'],
    },
    {
      place: 'Jakarta, Indonesia',
      time: "Sep '17 - Nov '17",
      image: stoqoImageUrl,
      role: 'Part Time Software Engineering Intern',
      company: 'Stoqo',
      website: 'https://www.stoqo.com',
      descriptions: [
        'Implemented forget password system and mechanism for customer.',
        'Continued maintaining and adding features to the internal tool and landing page codebase using Django-REST and React such as tool to export products list.',
      ],
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
      place: 'Depok, Indonesia',
      time: "Aug '17 - Dec '17",
      image: uiImageUrl,
      role: 'Assistant Lecturer',
      company: 'University of Indonesia',
      website: 'http://ui.ac.id/en',
      descriptions: [
        'Tutor and grade Computer Science Freshmans’ lab and task submissions for "Fundamentals of Programming I" course using Python programming language.',
      ],
      tags: ['Python'],
    },
  ],
  educations: [
    {
      place: 'Depok, Indonesia',
      time: "Aug '16 - present",
      image: uiImageUrl,
      grade: 'Current GPA: 3.98 / 4.00',
      role: 'Computer Science Undergraduate Student',
      institution: 'University of Indonesia',
      descriptions: [
        'Pursuing my passion in Computer Science at the largest and one of the best universities in Indonesia.',
        'Learning a lot of new things and frameworks',
        'Training in Competitive Programming',
        'Maintaining my love and passion for coding.',
      ],
      tags: ['Competitive Programming', 'Software Engineering', 'Web Development'],
    },
  ],
};

export const projects = [
  {
    imageUrl: projectPortfolioImageUrl,
    title: 'albertusangga.tech (Personal Portfolio)',
    link: 'https://albertusangga.tech',
    role: 'Solo Developer and Designer',
    descriptions: [
      'A portfolio website fully built using React and designed to be responsive, maintainable and modular.',
      'A side weekend project to try out several new frameworks and tech stacks.',
    ],
    tags: ['JSX', 'CSS', 'ReactJS', 'Redux', 'Webpack', 'UI Design', 'npm'],
  },
  {
    imageUrl: projectTwiggsyImageUrl,
    title: 'Twiggsy',
    link: 'https://www.twiggsy.com',
    role: 'Lead Front End Engineer',
    descriptions: [
      'Twiggsy is a redesigned Twibbon website.',
      'Contributed to the early stage of the development with a team of 5, initialized the boiler plate and built the front end core features',
      'Implemented auth system in front end, campaign creation site, and twibbon photo generator',
    ],
    tags: ['JSX', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'styled-components', 'Webpack', 'npm'],
  },
  {
    imageUrl: projectPekanRistekImageUrl,
    title: 'Pekan Ristek Website',
    link: 'https://github.com/adalberht/pekan-ristek-frontend',
    role: 'Lead Developer',
    descriptions: [
      'Led a team of four to develop a website for an event holding playground, tech talks and competitions for University of Indonesia’s students.',
      'Implemented the website using University of Indonesia’s CAS [Central Authentication Service] for auth, created a dashboard for tech talks, competition registration and playground system.',
    ],
    tags: ['JSX', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'Webpack', 'npm'],
  },
  {
    imageUrl: projectAndroidImageUrl,
    title: 'Android: Project Popular Movies 1',
    link: 'https://github.com/adalberht/android-project-popular-movies-1',
    role: 'Mobile Developer',
    descriptions: [
      'An Android application that display latest trending and top rated movies fetched from TheMovieDB API.',
      "Part of Udacity's Android Associate Fast-Track Program's project",
      'Developed without prior knowledge about Android in one week while doing my first internship at Stoqo',
    ],
    tags: ['Android', 'Java'],
  },
];
