import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.mobile-nav-toggle'), // nanti ini untuk hamburger button
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
