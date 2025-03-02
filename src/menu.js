import amalaImage from './images/1600px-Amala_and_Abula.jpg';
import jollofImage from './images/jollof2.jpeg';
import poundedYamImage from './images/pounded_yam.jpeg';
import efoRiroImage from './images/efo_riro.jpeg';
import suyaImage from './images/suya.jpeg';
import egusiSoupImage from './images/egusi_soup.jpeg';

export default function loadMenu() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <section class="menu">
      <h2>Our Menu</h2>
      <div class="menu-items">
      
        <div class="menu-item">
          <div class="menu-item-img">
            <img src="${amalaImage}" alt="Amala">
          </div>
          <div class="menu-item-details">
            <p class="dish-name">Amala <span class="price">10.0</span></p>
            <p class="dish-description">Amala is very nice, very nice.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-img">
            <img src="${jollofImage}" alt="Jollof Rice">
          </div>
          <div class="menu-item-details">
            <p class="dish-name">Jollof Rice <span class="price">15.0</span></p>
            <p class="dish-description">A classic Nigerian dish made with rice, tomatoes, and spices.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-img">
            <img src="${poundedYamImage}" alt="Pounded Yam">
          </div>
          <div class="menu-item-details">
            <p class="dish-name">Pounded Yam <span class="price">12.0</span></p>
            <p class="dish-description">Smooth pounded yam served with your choice of soup.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-img">
            <img src="${efoRiroImage}" alt="Efo Riro">
          </div>
          <div class="menu-item-details">
            <p class="dish-name">Efo Riro <span class="price">14.0</span></p>
            <p class="dish-description">Delicious spinach stew mixed with assorted meats.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-img">
            <img src="${suyaImage}" alt="Suya">
          </div>
          <div class="menu-item-details">
            <p class="dish-name">Suya <span class="price">8.0</span></p>
            <p class="dish-description">Spicy grilled beef skewers, a Nigerian street food favorite.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

        <div class="menu-item">
          <div class="menu-item-img">
            <img src="${egusiSoupImage}" alt="Egusi Soup">
          </div>
          <div class="menu-item-details">
            <p class="dish-name">Egusi Soup <span class="price">16.0</span></p>
            <p class="dish-description">A hearty Nigerian soup made from melon seeds, served with assorted meats.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

      </div>
    </section>
  `;
}