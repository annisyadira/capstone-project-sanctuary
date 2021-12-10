import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/responsive.css';
import SignInCheck from './utils/signInChecker';
import App from './views/app';

const app = new App({
  button: document.querySelector('.mobile-nav-toggle'), // nanti ini untuk hamburger button
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#maincontent'),
  logoutBtn: document.querySelector('#logout')
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  SignInCheck._checkNavbar();
});

window.addEventListener('load', () => {
  app.renderPage();
  SignInCheck._checkNavbar();
});
