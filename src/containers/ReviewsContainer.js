import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import { addReview, removeReview } from "../actions/reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
          restaurant={this.props.restaurant}
        />
        <Reviews
          removeReview={this.props.removeReview}
          restaurant={this.props.restaurant}
          reviews={this.props.reviews}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => {
      dispatch(addReview(review));
    },
    removeReview: (reviewId) => {
      dispatch(removeReview(reviewId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
