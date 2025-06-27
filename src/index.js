import "./styles.css";
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadAbout from './modules/about.js';

const content = document.getElementById('content');

function clearContent() {
  content.innerHTML = '';
}

function initNav() {
  document.getElementById('home').addEventListener('click', () => {
    clearContent();
    loadHome();
    console.log('test')
  });

  document.getElementById('menu').addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  document.getElementById('about').addEventListener('click', () => {
    clearContent();
    loadAbout();
  });
}

function initializeSite() {
  initNav();
  loadHome();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSite();
});