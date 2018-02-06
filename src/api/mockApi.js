// TO-DO: Make API
import uiImageUrl from '../assets/makara-ui-fasilkom.jpg';
import stoqoImageUrl from '../assets/stoqo.png';
import projectAndroidImageUrl from '../assets/project-android.png';
import projectPortfolioImageUrl from '../assets/project-portfolio.png';
import projectPekanRistekImageUrl from '../assets/project-pekan-ristek.png';
import projectTwiggsyImageUrl from '../assets/project-twiggsy.png';

const twiggsyImageUrl = 'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/hhbmro3rb2og5fittthx';

export const skills = {
  strong: [
    'Python',
    'JavaScript',
    'C++',
    'Java',
    'HTML',
    'CSS',
    'React',
  ],
  experienced: ['Git', 'Django (Django-REST)', 'Node.js', 'Express'],
  familiar: ['Android', 'Go', 'PHP', 'Angular'],
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
      time: "Dec '17 - present",
      image: twiggsyImageUrl,
      role: 'Software Engineer & Lead Front End',
      company: 'Twiggsy',
      website: 'https://www.twiggsy.com',
      descriptions: [
        'Twiggsy is a redesigned Twibbon website. (picture with watermarks to support public campaign).',
        'Led the early stage of front end development by creating project’s boilerplate and core website features such as campaign creation and filtered picture generation site using React.js, imgix API and Django-REST.',
        'Reduced 50% loading time of creating a filtered image by resizing image in client-side to reduce server workload.',
      ],
     tags: ['CSS', 'JavaScript', 'React.js', 'Redux', 'styled-components'],
    },
    {
      place: 'Jakarta, Indonesia',
      time: "Jun '17 - Feb '18",
      image: stoqoImageUrl,
      role: 'Software Engineering Intern',
      company: 'Stoqo',
      website: 'https://www.stoqo.com',
      descriptions: [
        'Improved company’s day to day operation by creating internal tool website using React, Redux, Django-REST, and Google Maps API that tracks more than 2000 orders, 300 stores and 900 products.',
        'Improved marketplace automation by creating merchant platform website using React, Redux and Algolia that allows supplier to add products in the marketplace.',
        'Implemented password resetting system for customer using stateless JWT.',
        'Implemented cart and checkout system of Stoqo’s marketplace in web platform which previously only available in the Android application using React and Redux backed by strong tests utilizing Django-REST API.',

      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'styled-components', 'Django-REST'],
    },
    {
      place: 'Depok, Indonesia',
      time: "Aug '17 - Dec '17",
      image: uiImageUrl,
      role: 'Teaching Assistant',
      company: 'University of Indonesia',
      website: 'http://ui.ac.id/en',
      descriptions: [
        'Tutored and graded 14 Computer Science freshmans’ in "Fundamentals of Programming I" course by teaching Python 3 as their first programming language, resulting in 12 of them receiving an A.',
      ],
      tags: ['Python'],
    },
  ],
  educations: [
    {
      place: 'Depok, Indonesia',
      time: "Aug '16 - present",
      image: uiImageUrl,
      grade: 'Current GPA: 3.91 / 4.00',
      role: 'Computer Science Undergraduate Student',
      institution: 'University of Indonesia',
      descriptions: [
        'Relevant Courseworks: Data Structures and Algorithm, Introduction to Computer Organization, Linear Algebra, Statistics & Probability, Web Programming & Design (Taken); Advanced Programming, Competitive Programming, Database, Operating Systems, Theory of Language & Automata (Taking);',
      ],
      tags: ['Competitive Programming', 'Software Engineering', 'Web Development'],
    },
  ],
};

export const projects = [
  {
    title: 'HOTP TOTP Generator',
    role: 'Contributor',
    link: 'https://www.npmjs.com/package/hotp-totp-generator',
    descriptions: [
      'Implemented and published customizable HMAC-based and Time-based One Time Password (HOTP and TOTP) Algorithm as  a npm package by using JavaScript (Node.js).',
    ],
    tags: ['Node.js', 'Algorithm', 'OTP'],
  },
  {
    imageUrl: projectPortfolioImageUrl,
    title: 'albertusangga.tech (Personal Portfolio)',
    link: 'https://albertusangga.tech',
    role: 'Solo Developer and Designer',
    descriptions: [
      'A portfolio website fully built using React and designed to be responsive, maintainable and modular.',
      'A side weekend project to try out several new frameworks and tech stacks.',
    ],
    tags: ['JSX', 'CSS', 'React.js', 'Redux', 'Webpack', 'UI Design', 'npm'],
  },
  /*
  {
    imageUrl: projectTwiggsyImageUrl,
    title: 'Twiggsy',
    link: 'https://www.twiggsy.com',
    role: 'Lead Front End Engineer',
    descriptions: [
      'Twiggsy is a redesigned Twibbon website. (picture with watermarks to support public campaign).',
      'Led the early stage of front end development by creating project’s boilerplate and core website features such as campaign creation and filtered picture generation site using React.js, imgix API and Django-REST.',
      'Reduced 50% loading time of creating a filtered image by resizing image in client-side to reduce server workload.',
    ],
    tags: ['JSX', 'CSS', 'JavaScript', 'React.js', 'Redux', 'styled-components', 'Webpack', 'npm'],
  },
  */
  {
    imageUrl: projectPekanRistekImageUrl,
    title: 'Pekan Ristek Website',
    link: 'https://github.com/adalberht/pekan-ristek-frontend',
    role: 'Lead Developer',
    descriptions: [
      'Led a team of four to develop a website for an event holding playground, tech talks and competitions for University of Indonesia’s students.',
      'Implemented the website using University of Indonesia’s CAS [Central Authentication Service] for auth, created a dashboard for tech talks, competition registration and playground system.',
    ],
    tags: ['JSX', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Webpack', 'npm'],
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
