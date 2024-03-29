const courses = [
  {
    id: 1,
    title: 'Securing React Apps with Auth0',
    slug: 'react-auth0-authentication-security',
    authorId: 1,
    categoryId: 2    
  },
  {
    id: 2,
    title: 'React: The Big Picture',
    slug: 'react-big-picture',
    authorId: 1,
    categoryId: 4
  },
  {
    id: 3,
    title: 'Creating Reusable React Components',
    slug: 'react-creating-reusable-components',
    authorId: 1,
    categoryId: 2
  },
  {
    id: 4,
    title: 'Building a JavaScript Development Environment',
    slug: 'javascript-development-environment',
    authorId: 1,
    categoryId: 2
  },
  {
    id: 5,
    title: 'Building Applications with React and Redux',
    slug: 'react-redux-react-router-es6',
    authorId: 1,
    categoryId: 4
  },
  {
    id: 6,
    title: 'Building Applications in React and Flux',
    slug: 'react-flux-building-applications',
    authorId: 1,
    categoryId: 4
  },
  {
    id: 7,
    title: 'Clean Code: Writing Code for Humans',
    slug: 'writing-clean-code-humans',
    authorId: 1,
    categoryId: 7
  },
  {
    id: 8,
    title: 'Architecting Applications for the Real World',
    slug: 'architecting-applications-dotnet',
    authorId: 1,
    categoryId: 7
  },
  {
    id: 9,
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    slug: 'career-reboot-for-developer-mind',
    authorId: 1,
    categoryId: 6
  },
  {
    id: 10,
    title: 'Web Component Fundamentals',
    slug: 'web-components-shadow-dom',
    authorId: 1,
    categoryId: 4
  }
];

const authors = [
  { id: 1, name: 'Cory House' },
  { id: 2, name: 'Scott Allen' },
  { id: 3, name: 'Dan Wahlin' }
];

const categories = [
  {'id':1,'subCategoryId':-1,'name':'Programming Languages'},
  {'id':2,'subCategoryId':-1,'name':'JavaScript'},    
  {'id':3,'subCategoryId':1,'name':'HTML5'},
  {'id':4,'subCategoryId':2,'name':'React'},
  {'id':5,'subCategoryId':-1,'name':'Career'},  
  {'id':6,'subCategoryId':-1,'name':'Software Architecture'},  
  {'id':7,'subCategoryId':-1,'name':'Software Practices' }
];

const newCourse = {
  id: null,
  title: '',
  authorId: null,
  categoryId: null
};

const newAuthor = {
  id: null,
  name: ''
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  newAuthor,
  authors,
  categories
};
