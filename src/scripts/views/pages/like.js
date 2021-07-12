import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {
  createRestaurantItemTemplate,
  createEmptyIllustration,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Favorite Restaurants</h2>
        <div class="loader"></div>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('#jumbotron').style.display = 'none';
    document.querySelector('.hero_area').style.display = 'none';

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const loader = document.querySelector('.loader');
    loader.style.display = 'none';

    if (restaurants.length < 1) {
      document.querySelector('.content').innerHTML = createEmptyIllustration();
    }
  },
};

export default Favorite;