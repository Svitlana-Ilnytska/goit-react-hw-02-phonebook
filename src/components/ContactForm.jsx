import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class ContactForm extends Component {
  state = {
    name: "",
  };

  nameInputId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({
      name: "",
 
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
