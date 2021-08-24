import React, { Component } from "react";
import Form from "./Form";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      location: {}
    };
  }

  handleChange = ({ target: input}) => {
    const { name, value } = input
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const location = {
      city: this.state.search,
    }
    this.setState({ location });
  };

  render() {
    const { search } = this.state;
    return (
      <main className="container">
        <div>
          <Form
            search={search}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </div>
      </main>
    );
  }
}

export default Main;
