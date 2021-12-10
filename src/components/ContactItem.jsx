import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, onDeleteContact }) => (
  <>
    <p>
      {name}: {number}
    </p>

    <button type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
