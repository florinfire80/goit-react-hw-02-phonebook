import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;

    return (
      <li>
        <strong>{name}</strong>: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  }
}

export default ContactItem;
