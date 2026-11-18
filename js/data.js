// data.js - all my info is here (arrays and objects)
// so if I want to change something (name, motto, projects, etc.), I only edit this file
// and I don't need to touch the html. script.js reads this and shows it on the page.

// ---------- my profile (object) ----------
const profile = {
  name: "Maricar Padre",
  shortName: "Maricar's Portfolio",
  email: "maricarpadre487@email.com",

  // these words are typed one by one in the hero section
  roles: ["Web Developer", "Front-End Learner", "Problem Solver"],

  intro:
    "I'm a 2nd year college student who loves building clean and simple websites.",
  motto: "Keep it simple. Keep it working. Keep learning.",
  about:
    "I'm a 2nd year student taking up Computer Science. I started with plain HTML and CSS, then I learned JavaScript and Bootstrap. I like making pages that look clean and are easy to use. I'm still learning, but every project teaches me something new.",

  philosophyIntro:
    "My style is simple, clean and friendly. I believe a website should be easy to understand in just a few seconds. I use only a few colors, clear text and enough space so nothing feels crowded. That's my identity as a developer: simple on the outside, organized on the inside.",
};

// ---------- small facts about me (array of objects) ----------
const facts = [
  { label: "School", value: "ISPSC - Main Campus" },
  { label: "Course", value: "BS Computer Science" },
  { label: "Year", value: "2nd Year" },
  { label: "Location", value: "Bani, Santa Lucia Ilocos Sur" },
];

// ---------- design philosophy (array of objects) ----------
const philosophy = [
  {
    title: "Simple First",
    text: "If something on the page doesn't help the user, I remove it. Less clutter means the important things are easier to see.",
  },
  {
    title: "Clean and Consistent",
    text: "I use the same colors, fonts and spacing on every page, so the whole website looks like one design.",
  },
  {
    title: "Works on Any Screen",
    text: "I always check my pages on both laptop and phone. The Bootstrap grid helps me a lot with this.",
  },
  {
    title: "Easy to Read and Use",
    text: "Text should be big enough, colors should have good contrast, and buttons should clearly say what they do.",
  },
];

// ---------- my colors (array of objects) ----------
const palette = [
  { name: "Navy", color: "#1f3a5f" },
  { name: "Sky Blue", color: "#4a9eff" },
  { name: "Green", color: "#2e7d32" },
  { name: "Soft Gray", color: "#eef2f7" },
];

// ---------- projects (array of objects) ----------
// term is used by the filter buttons
// TODO: change the github links to my real repositories
const projects = [
  {
    id: 1,
    term: "Midterm",
    title: "Student Grade Equivalent",
    image: "images/projects/student-grades.jpg",
    description:
      "A page that shows the grade, equivalent, remark and academic leader class of each student when the button is clicked. I used arrays and a for loop so I don't need to repeat the code for every student.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/your-username/WD1L4_CS2A_LASTNAME_I",
  },
  {
    id: 2,
    term: "Midterm",
    title: "Register, Login and User List",
    image: "images/projects/user-list.jpg",
    description:
      "A small system where users can register, log in and see a list of registered users. The users are saved in localStorage and the code is separated into different JS files.",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/your-username/WD1L5_CS2A_LASTNAME_I",
  },
  {
    id: 3,
    term: "Finals",
    title: "Developer's Profile Website",
    image: "images/projects/profile-site.jpg",
    description:
      "This website! A single-page profile made with Bootstrap. The projects, colors and other content are made by JavaScript from arrays and objects.",
    tech: ["HTML", "Bootstrap", "JavaScript"],
    github: "https://github.com/your-username/WD1L6_CS2A_LASTNAME_I",
  },
];

// ---------- contact details (array of objects) ----------
// link is null when it should not be clickable
const contacts = [
  {
    label: "Email",
    value: "maricarpadre487@email.com",
    link: "mailto:maricarpadre487@email.com",
  },
  {
    label: "GitHub",
    value: "https://github.com/maricarpadre487",
    link: "https://github.com/maricarpadre487",
  },
  {
    label: "Facebook",
    value: "facebook.com",
    link: "https://facebook.com",
  },
  { label: "Location", value: "Bani, Santa Lucis Ilocos Sur", link: null },
];
