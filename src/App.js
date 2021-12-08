import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  nameInputId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.props.onSignUp({ ...this.state });
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({
  //     name: "",
  //   });
  // };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </form>
    );
  }
}
