import "./styles.css";
import loadHomepage from './homepage';
import loadAboutPage from './about'; 
import loadMenuPage from './menu';

document.addEventListener('DOMContentLoaded', () => {
  loadHomepage(); // Loading the homepage content by default

  // Getting button elements
  const homeButton = document.querySelector('nav button:nth-child(1)');
  const menuButton = document.querySelector('nav button:nth-child(2)');
  const aboutButton = document.querySelector('nav button:nth-child(3)');

  // Event listeners
  homeButton.addEventListener('click', () => {
    loadHomepage();
  });

  menuButton.addEventListener('click', () => {
    loadMenuPage();
  });

  aboutButton.addEventListener('click', () => {
    loadAboutPage();
  });
});