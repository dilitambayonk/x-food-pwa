import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Detail Restaurant</h3>
    <h4>Rating</h4>
    <p><i class="fas fa-star"></i> ${restaurant.rating}</p>
    <h4>Address</h4>
      <p>${restaurant.address}</p>
    <h4>Menus Categories</h4>
      <ul>
        ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
      </ul>
    <h4>All Menus</h4>
      <p>
        <strong>Foods :</strong>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </p>
      <p>
        <strong>Drinks :</strong>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </p>
  </div>
  <div class="restaurant__review">
    <h3>Customer Reviews</h3>
    <div class="reviews">
      ${restaurant.customerReviews.map((review) => `
        <div class="customer-review">
          <div class="head-reviewers">
            <i class="fas fa-user-circle"></i>
            <h3>${review.name}</h3>
            <p>${review.date}</p>
          </div>
          <hr>
          <div class="content-reviewers">
            <i class="fas fa-quote-left"></i>
            <p>${review.review}</p>
          </div>
          <div class="customer-rating">
            <i class="fas fa-star"></i> <strong>3.4/₅</strong>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p><i class="fas fa-star"></i><span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
        <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart"></i>
  </button>
`;

const createEmptyIllustration = () => `
  <div class="data-empty">
    <img src="images/empty-image.svg" alt="empty-image-illustration">
    <p class="restaurant_not_found">Ups.. restaurant item is empty!</p>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEmptyIllustration,
};