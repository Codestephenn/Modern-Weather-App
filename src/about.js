import restaurantInteriorImage from './images/restaurant-interior.jpeg';

export default function loadAboutPage() {
  const contentDiv = document.getElementById('content');
  console.log("Content div found:", contentDiv); // Debugging log

  contentDiv.innerHTML = `
    <section class="about-us">
      <div class="abt-hero">
        <div class="overlay">
          <h1>About Foodies Restaurant</h1>
        </div>
      </div>
       
      <div class="about-content">
        <div class="about-text">
          <p>Foodies is a family-owned Nigerian restaurant located in the heart of Lagos. We specialize in creating delicious meals that combine traditional Nigerian flavors with a modern twist.</p>
          <p>Our mission is to bring people together through food, offering a warm and welcoming atmosphere where customers can enjoy our carefully curated menu. From Amala to Jollof Rice, each dish is made with love and the finest ingredients.</p>
          <p>Come visit us and experience the flavors of Nigeria!</p>
        </div>
        <div class="about-image">

        </div>
      </div>
    </section>
  `;
}