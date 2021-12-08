import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ items, onDeleteContact }) =>
//   items.length > 0 && (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
//   );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteTask: PropTypes.func,
};

export default ContactList;
