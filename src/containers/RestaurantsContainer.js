import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
import { addRestaurant, removeRestaurant } from "../actions/restaurants";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.state.restaurants}
          removeRestaurant={this.props.removeRestaurant}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant)),
    removeRestaurant: (id) => dispatch(removeRestaurant(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
