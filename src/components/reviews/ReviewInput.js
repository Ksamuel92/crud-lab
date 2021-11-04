import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurant.id,
    });
    this.setState({
      text: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    debugger;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default ReviewInput;
