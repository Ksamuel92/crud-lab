import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurant.id
    );

    const renderReviews = restaurantReviews.map((review) => (
      <Review
        key={review.id}
        review={review}
        removeReview={this.props.removeReview}
      />
    ));
    return <ul>{renderReviews}</ul>;
  }
}

export default Reviews;
