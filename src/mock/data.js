import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sara Castellino | Developer',
  lang: 'en, it', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' - Software Developer',
  name: 'Sara Castellino',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Wiggo_icon.png',
    title: 'Wiggo | Property management, organised.',
    info:
      'Solo project (5 days). Wiggo helps property managers to create, edit and visualise their guests, properties and bookings from different booking platforms on one tool only. It has been created using Ruby, PostgresSQL, Pry, Sinatra, HTML, CSS. It includes CRUD actions and RESTful routes for the guests, properties and bookings sections. The UX study involved accessibility constraints (user with protanopia).',
    info2: '',
    url: 'https://wiggo.herokuapp.com/',
    repo: 'https://github.com/saracastellino/wiggo_property_manager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Orbital_icon.png',
    title: 'Orbital | Educational Space application.',
    info:
      'Group project (5 days). Interactive browser application that displays information about Space in a fun and interesting way, offering the user games and activities. It has been created using Javascript, Node.js, Express.js, MongoDB, Insomnia, HTML, CSS, NPM, Vue.js, NASA APIs.',
    info2: '',
    url: 'https://orbital-space-app.herokuapp.com/',
    repo: 'https://github.com/saracastellino/w9_JAVASCRIPT_team_project_ORBITAL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Happy_icon.png',
    title: 'Happy | Mood tracker.',
    info:
      'Group project (5 days). Responsive mobile app allowing the user to track their mood over time. The app is inspired by the difficulties many people are experiencing during ‘lockdown. Technologies used: JavaScript, Java, React, Spring, H2, HTML, CSS, NPM, Recharts, external APIs.',
    info2: '',
    url: '',
    repo: 'https://github.com/saracastellino/w14_SPRING_REACT_group_project_HAPPY', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sara.castellino.ca@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/saracastellino/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/saracastellino',
    },
  ],
};
