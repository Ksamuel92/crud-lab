import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="text"
            id="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
