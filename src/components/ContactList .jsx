import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

const ContactList = ({ items, onDeleteContact }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ContactItem
          {...item}
          onDeleteContact={() => onDeleteContact(item.id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteTask: PropTypes.func,
};

export default ContactList;
