import cuid from "cuid";
export const cuidFn = cuid;

export default function manageReviews(state = [], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid(),
      };
      return [...state, review];

    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.reviewId);
    default:
      return state;
  }
}
