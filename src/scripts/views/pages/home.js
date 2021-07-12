import TheRestaurantSource from '../../data/therestaurant-source';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">All Restaurants</h2>
        <div class="loader"></div>
        <div div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },
  async afterRender() {
    document.querySelector('#jumbotron').style.display = 'block';
    document.querySelector('.hero_area').style.display = 'block';

    const restaurants = await TheRestaurantSource.allRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
  },
};

export default Home;