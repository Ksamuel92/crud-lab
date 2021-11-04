export const addRestaurant = (restaurant) => {
  return {
    type: "ADD_RESTAURANT",
    restaurant,
  };
};

export const removeRestaurant = (restaurantId) => {
  return {
    type: "DELETE_RESTAURANT",
    restaurantId,
  };
};

// export const upvoterestaurant = (restaurantId) => {
//   return {
//     type: "UPVOTE_restaurant",
//     restaurantId,
//   };
// };

// export const downvoterestaurant = (restaurantId) => {
//   return {
//     type: "DOWNVOTE_restaurant",
//     restaurantId,
//   };
// };
