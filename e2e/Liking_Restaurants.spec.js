const assert = require('assert');

Feature('Liking Restaurants');

Before(({
  I,
}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Liking one restaurant', async ({
  I,
}) => {
  I.see('Ups.. restaurant item is empty!', '.restaurant_not_found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').at(10);
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({
  I,
}) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').at(10));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title a');
  const firstLikedRestaurant = locate('.restaurant__title a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.restaurant__title');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.see('Ups.. restaurant item is empty!', '.restaurant_not_found');
});