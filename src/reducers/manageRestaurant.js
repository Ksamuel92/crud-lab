import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        text: action.restaurant,
        id: cuid(),
      };
      return [...state, restaurant];

    case "DELETE_RESTAURANT":
      return state.filter(
        (restaurant) => restaurant.id !== action.restaurantId
      );
    default:
      return state;
  }
}
