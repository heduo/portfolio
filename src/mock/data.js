import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derek HE | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Full Stack Web Developer',
  name: 'Derek HE',
  subtitle: 'Front End Developer | Backend Developer | PHP Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I’m a professional software engineer with 3 years‘ experience in web development. I love clean and beautiful code. I’m good at collaborating with other engineers, keeping continuous learning, and advancing current software engineering practices.',
  paragraphTwo: 'My main technical stack includes PHP/Laravel, JavaScript/jQuery/React/Vue, HTML5, CSS3, MySQL, Redis, Linux.',
  paragraphThree: 'I graduated from University of Wollongong University in 2016, holding a master degree of Computer Science.',
  resume: `https://stupefied-yalow-fa958a.netlify.app/Derek_HE_CV.docx`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ppmall.jpg',
    title: 'PP Mall',
    info: 'This is a fully-functioned E-Commerce web app built by PHP/Laravel with Stripe payment gateway integrated. It consists of models of users, users_addresses, admins, orders, products, coupons',
    info2: 'Laravel is used as the MVC framework. Vue.js and Google place api is used in user address component. Redis is used for queque jobs. MySQL is used for DBS.',
    url: 'http://165.232.164.104',
    repo: 'https://github.com/heduo/ppmall', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robots_friends.jpg',
    title: 'Robots Friends',
    info: 'React consuming robohash API',
    info2: 'Redux is used for state management',
    url: 'https://heduo.github.io/robofriends',
    repo: 'https://github.com/heduo/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vuetours.png',
    title: 'Vuetours',
    info: 'Static html and css websits following responsive design',
    info2: '',
    url: 'https://heduo.github.io/vuetours',
    repo: 'https://github.com/heduo/vuetours', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sales_report.png',
    title: 'Sales Report',
    info: 'Small assignment using Laravel and Vue',
    info2: 'Please pick ranges before AUG 2020, because no sales data after July 2020',
    url: 'https://tranquil-caverns-45960.herokuapp.com/',
    repo: 'https://github.com/heduo/sales', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.jpg',
    title: 'Portfolio',
    info: 'Personal website using Gatsby',
    info2: '',
    url: 'https://stupefied-yalow-fa958a.netlify.app',
    repo: 'https://github.com/heduo/portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ilheduo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/heduo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/heduo/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
