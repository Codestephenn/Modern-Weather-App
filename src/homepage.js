import amalaImage from './images/1600px-Amala_and_Abula.jpg';
import jollofImage from './images/jollof2.jpeg';

export default function loadHomepage() {
  const contentDiv = document.getElementById('content');
  console.log("Content div found:", contentDiv); // Debugging log

  contentDiv.innerHTML = `
    <section class="hero">
      <div class="hero-text">
        <h1>Foodies Restaurant</h1>
        <h2>Lagos</h2>
        <p>We are a family-owned Nigerian restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a table</button>
      </div>
      <div class="hero-image"></div>
    </section>

    <section class="todays-special">
      <h2>Today's Special</h2>
      <div class="specials">
        
        <div class="special">
          <div class="special-img">
            <img src="${amalaImage}" alt="Amala">
          </div>
          <div class="special-details">
            <p class="dish-name">Amala <span class="price">10.0</span></p>
            <p class="dish-description">Amala is very nice, very nice.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

        <div class="special">
          <div class="special-img">
            <img src="${jollofImage}" alt="Jollof Rice">
          </div>
          <div class="special-details">
            <p class="dish-name">Jollof Rice <span class="price">15.0</span></p>
            <p class="dish-description">A classic Nigerian dish made with rice, tomatoes, and spices.</p>
            <p class="order">Order a delivery <span class="delivery-icon"></span></p>
          </div>
        </div>

      </div>
    </section>

    <section class="opening-hours">
      <h2>Opening Hours</h2>
      <p>Monday - Friday: 10 AM - 10 PM</p>
      <p>Saturday - Sunday: 12 PM - 11 PM</p>
    </section>

    <section class="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <form id="newsletter-form">
        <input type="email" placeholder="Enter your email" required>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  `;

  // Handle form submission
  document.getElementById('newsletter-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.elements[0].value;
    alert(`Thank you for subscribing with ${email}!`);
    event.target.reset();
  });
}