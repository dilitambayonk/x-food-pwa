import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurant-source';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="loader"></div>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    document.querySelector('#jumbotron').style.display = 'none';
    document.querySelector('.hero_area').style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    const loader = document.querySelector('.loader');
    loader.style.display = 'none';

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        city: data.restaurant.city,
        pictureId: data.restaurant.pictureId,
        rating: data.restaurant.rating,
      },
    });
  },
};

export default Detail;