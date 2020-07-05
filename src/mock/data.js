import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sara Castellino | Software Developer',
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
    title: 'Wiggo | Property Management, organised. Built using Ruby, PostgreSQL, Sinatra.',
    info:
      'Solo project (5 days). Wiggo helps property managers to create, edit and visualise their guests, properties and bookings. It has been created using Ruby, PostgreSQL, Pry, Sinatra, HTML, CSS. It includes CRUD actions and RESTful routes. The UX study involved accessibility constraints (user with protanopia).',
    info2: '',
    url: 'https://wiggo.herokuapp.com/',
    repo: 'https://github.com/saracastellino/wiggo_property_manager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Orbital_icon.png',
    title:
      'Orbital | Educational Space Application. Built using Javascript, Node.js, MongoDB, Vue.js.',
    info:
      'Group project (5 days). Interactive browser application that displays information about Space in a fun and interesting way, offering the user games and activities. It has been created using Javascript, Node.js, Express.js, MongoDB, Insomnia, HTML, CSS, NPM, Vue.js, NASA APIs.',
    info2: '',
    url: 'https://orbital-space-app.herokuapp.com/',
    repo: 'https://github.com/saracastellino/w9_JAVASCRIPT_team_project_ORBITAL', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Happy_icon.png',
    title: 'Happy | Responsive Mood Tracker. Built using JavaScript, Java, React, Spring, H2',
    info:
      'Group project (5 days). Responsive mobile app allowing the user to track their mood over time. The app is inspired by the difficulties many people are experiencing during lockdown. Technologies used: JavaScript, Java, React, Spring, H2, HTML, CSS, NPM, Recharts, external APIs.',
    info2: '',
    url: '',
    repo: 'https://github.com/saracastellino/w14_SPRING_REACT_group_project_HAPPY', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Hopcorner.png',
    title: 'Hop Corner Cagliari | Responsive Wix website with booking system.',
    info:
      'Website made in 2018 for Hop Corner, pub in Cagliari (Italy). It has booking function, quote request buttons, cookies policy, gallery, social media links and it is SEO optimised.',
    info2: '',
    url: 'https://www.hopcornerbirreria.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GVCongressi.png',
    title: 'GV Congressi & Eventi | Responsive Wix website with event registration form function.',
    info:
      'Website made in 2018 for GV Eventi & Congressi, event management organisation. It has a registration form for event participants, quote request buttons, cookies policy, social media links and it is SEO optimised. For the same project I created the company logo and the company graphics.',
    info2: '',
    url: 'https://www.gvcongressicagliari.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Sangiuliano.png',
    title: 'San Giuseppe Calasanzio School | Responsive Wix website with integrated blog.',
    info:
      'Website made in 2017 for the school where I also taught (Sanluri, Italy). It has an integrated blog, downloadable school material, enrollment form, gallery, social media links.',
    info2: '',
    url: 'https://saracastellino0.wixsite.com/schoolwebsite',
    repo: '', // if no repo, the button will not show up
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
