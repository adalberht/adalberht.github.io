// Company logos
import uiImageUrl from "../assets/makara-ui-fasilkom.jpg";
import stoqoImageUrl from "../assets/stoqo.png";
import travelokaImageUrl from "../assets/traveloka-logo.jpg";
import gojekImageUrl from "../assets/gojek-logo.png";
import googleImageUrl from "../assets/google-logo.png";
import facebookImageUrl from "../assets/facebook-logo.png";

// Project assets
import projectAndroidImageUrl from "../assets/project-android.png";
import projectPortfolioImageUrl from "../assets/project-portfolio.png";
import projectPekanRistekImageUrl from "../assets/project-pekan-ristek.png";
import projectTwiggsyImageUrl from "../assets/project-twiggsy.png";

export const BLOG_URL = "https://blog.albertusangga.dev";

export const GOOGLE_ANALYTICS_TRACKING_ID = "UA-122832553-1";

export const skills = {
  strong: [
    "Python",
    "JavaScript",
    "Java",
    "Dart",
    "Flutter",
    "Go",
    "C++",
    "HTML",
    "CSS",
    "React",
  ],
  experienced: [
    "Django",
    "Android",
    "Git",
    "Docker",
    "Kubernetes",
    "GitLab CI",
    "Prolog",
    "Bash",
    "Working in UNIX environment",
  ],
  familiar: ["Ruby", "Perl", "PHP"],
  achievements: [
    {
      tag: "[International]",
      title: "Finalist (Top 50), 2017 ACM-ICPC Asia Jakarta Regional Contest",
      description:
        "An ICPC-style programming competition attended by 80 teams. Advanced to finals through fierce competition between more than 500 teams.",
    },
    {
      tag: "[National]",
      title: "Finalist (Top 20), 2017 ACM-ICPC Maranatha Provincial Contest",
      description:
        "An ICPC-style programming competition attended by more than 100 teams.",
    },
    {
      tag: "[National]",
      title: "1st Runner-Up, Programming Competition Session (PCS) JOINTS 2015",
      description:
        "A IOI-style programming competition held by Universitas Gadjah Mada for highschool students. Placed 4 out of ± 30 finalist.",
    },
  ],
};

export const experiences = {
  works: [
    {
      place: "London, UK",
      time: "Jun '20 - Aug '20",
      image: facebookImageUrl,
      role: "(Incoming) Software Engineering Intern",
      company: "Facebook",
      website: "https://www.facebook.com",
      descriptions: ["Incoming Software Engineering Intern at Facebook London"],
      tags: [],
    },
    {
      place: "Seattle, US",
      time: "Sep '19 - Dec '19",
      image: googleImageUrl,
      role: "Software Engineering Intern",
      company: "Google",
      website: "https://www.google.com",
      descriptions: [
        "Interned at Flutter team, Google's open source UI toolkit for crafting beautiful cross-platform apps.",
        "Created Layout Explorer in Dart DevTools, a new tool coming in Flutter v1.12 stable release for debugging Flutter layout issues and fixing overflow error which is one of the most common errors in Flutter.",
        "Layout Explorer was announced at the biggest Flutter Event (Flutter Interact) and received positive reactions from users.",
        "Collaborated with senior Developer Advocate in Flutter to make a YouTube video to introduce and promote Layout Explorer's features.",
        "Received peer bonus for diagnosing and fixing an integration test failure caused by breaking change in Dart pub.",
        "Wrote 53 corner test cases in Flutter core repository (flutter/flutter) resulting in more structured Flutter error message and comprehensive test coverage in Flutter error handling.",
      ],
      tags: ["Dart", "Flutter"],
    },
    {
      place: "Jakarta, Indonesia",
      time: "Jun '19 - Aug '19",
      image: gojekImageUrl,
      role: "Software Engineering Intern (Full-stack)",
      company: "Gojek",
      website: "https://www.gojek.io",
      descriptions: [
        "Gojek is the leading ride-hailing, food delivery, and super app tech decacorn company operating in South East Asia.",
        "Worked on improving Gojek's realtime image manipulation system that serves 50K images / minutes.",
        "Helped in open sourcing Gojek's realtime image manipulation library (https://github.com/gojek/darkroom).",
        "Did performance profiling in an attempt to improve the overall image processing time performance",
      ],
      tags: ["Go", "Kubernetes"],
    },
    {
      place: "Jakarta, Indonesia",
      time: "Oct '18 - Apr '19",
      image: travelokaImageUrl,
      role: "Part-time Software Engineer",
      company: "Traveloka",
      website: "https://www.traveloka.com",
      descriptions: [
        "Traveloka is a tech unicorn company and leading company for Online Travel Agent in South East Asia.",
        "Fixed broken internal tools due to the split of Train Railink product to Airport Transport product.",
        "Migrated Bus supply internal inventory database to another database to increase scability of Bus supply tools.",
        "Implemented caching mechanism using Memcached in Bus search service resulting in faster query execution time.",
      ],
      tags: ["Java", "PostgreSQL", "Microservices", "Memcached", "AWS"],
    },
    {
      place: "Jakarta, Indonesia",
      time: "Jun '18 - Aug '18",
      image: travelokaImageUrl,
      role: "Software Engineering Intern",
      company: "Traveloka",
      website: "https://www.traveloka.com",
      descriptions: [
        "Built two major features of Traveloka internal app using React Native.",
        "Created Python script to analyze and detect errors in more than 11000 Traveloka Android strings.",
        "Implemented several new events tracking and deeplink navigations for Train/Bus product in app version 3.3.",
        "Contributed in UI iteration for Traveloka Bus product in Android version 3.2.",
      ],
      tags: [
        "Java",
        "Android",
        "JavaScript",
        "React Native",
        "Mobile Development",
      ],
    },
    {
      place: "Jakarta, Indonesia",
      time: "Jun '17 - Feb '18",
      image: stoqoImageUrl,
      role: "Software Engineering Intern",
      company: "Stoqo",
      website: "https://www.stoqo.com",
      descriptions: [
        "Improved company’s day to day operation by creating internal tool website using React, Redux, Django-REST, and Google Maps API that tracks more than 2000 orders, 300 stores and 900 products.",
        "Improved marketplace automation by creating merchant platform website using React, Redux and Algolia that allows supplier to add products in the marketplace.",
        "Implemented password resetting system for customer using stateless JWT.",
        "Implemented cart and checkout system of Stoqo’s marketplace in web platform which previously only available in the Android application using React and Redux backed by strong tests utilizing Django-REST API.",
      ],
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "styled-components",
        "Django-REST",
      ],
    },
    {
      place: "Depok, Indonesia",
      time: "Aug '17 - Dec '17",
      image: uiImageUrl,
      role: "Teaching Assistant",
      company: "University of Indonesia",
      website: "http://ui.ac.id/en",
      descriptions: [
        'Tutored and graded 14 Computer Science freshmans’ in "Fundamentals of Programming I" course by teaching Python 3 as their first programming language, resulting in 12 of them receiving an A.',
      ],
      tags: ["Python"],
    },
  ],
  educations: [
    {
      place: "Depok, Indonesia",
      time: "Aug '16 - present",
      image: uiImageUrl,
      grade: "Current CGPA: 3.84 / 4.00",
      role: "Computer Science Undergraduate Student",
      institution: "University of Indonesia",
      descriptions: [
        "Relevant Courseworks: Data Structures and Algorithm, Introduction to Computer Organization, Linear Algebra, Statistics & Probability, Web Programming & Design, Advanced Programming, Competitive Programming, Database, Operating Systems, Theory of Language & Automata;",
      ],
      tags: ["Software Engineering", "Competitive Programming"],
    },
  ],
};

export const projects = [
  {
    title: "TuberculosApp",
    // role: 'Solo Developer',
    link: "https://www.github.com/adalberht/tuberculos-app",
    descriptions: [
      "Cross-platform mobile application for pharmacists to remind their patients to take their medicine.",
      "Developed full features of the app including real-time push notification and chat using Flutter and Firebase in 3 weeks.",
    ],
    tags: ["Flutter", "Android", "iOS", "Firebase", "Redux"],
  },
  {
    title: "HOTP TOTP Generator",
    // role: 'Contributor',
    link: "https://www.npmjs.com/package/hotp-totp-generator",
    descriptions: [
      "Implemented and published customizable HMAC-based and Time-based One Time Password (HOTP and TOTP) Algorithm as  a npm package by using JavaScript (Node.js).",
    ],
    tags: ["Node.js", "Algorithm", "OTP"],
  },
  {
    imageUrl: projectPortfolioImageUrl,
    title: "albertusangga.tech (Personal Portfolio)",
    link: "https://albertusangga.tech",
    // role: 'Solo Developer and Designer',
    descriptions: [
      "A portfolio website fully built using React and designed to be responsive.",
      "A side weekend project to try out several new frameworks and tech stacks.",
    ],
    tags: ["React.js", "Redux", "CSS", "Webpack", "UI Design"],
  },
  {
    imageUrl: projectTwiggsyImageUrl,
    title: "Twiggsy",
    // link: "https://www.twiggsy.com",
    // role: 'Lead Front End Engineer',
    descriptions: [
      "Twiggsy is a redesigned Twibbon website. (picture with watermarks to support public campaign).",
      "Led the early stage of front end development by creating project’s boilerplate and core website features such as campaign creation and filtered picture generation site using React.js, imgix API and Django-REST.",
      "Reduced 50% loading time of creating a filtered image by resizing image in client-side to reduce server workload.",
    ],
    tags: ["JavaScript", "React.js", "CSS", "Redux"],
  },
  {
    imageUrl: projectPekanRistekImageUrl,
    title: "Pekan Ristek Website",
    link: "https://github.com/adalberht/pekan-ristek-frontend",
    // role: 'Lead Developer',
    descriptions: [
      "Led a team of four to develop a website for an event holding playground, tech talks and competitions for University of Indonesia’s students.",
      "Implemented the website using University of Indonesia’s CAS [Central Authentication Service] for auth, created a dashboard for tech talks, competition registration and playground system.",
    ],
    tags: ["CSS", "JavaScript", "React.js", "Redux"],
  },
  {
    imageUrl: projectAndroidImageUrl,
    title: "Android: Project Popular Movies 1",
    link: "https://github.com/adalberht/android-project-popular-movies-1",
    // role: 'Mobile Developer',
    descriptions: [
      "An Android application that display latest trending and top rated movies fetched from TheMovieDB API.",
      "Part of Udacity's Android Associate Fast-Track Program's project",
      "Developed without prior knowledge about Android in one week while doing my first internship at Stoqo",
    ],
    tags: ["Android", "Java"],
  },
];
