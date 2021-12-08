import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList ";

import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    contacts: [],
  };

  nameInputId = nanoid();

  addContact = (contact) => {
    const contactToAdd = {
      ...contact,
      id: nanoid(),
    };

    this.setState((state) => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  deleteContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList items={contacts} />
      </div>
    );
  }
}
