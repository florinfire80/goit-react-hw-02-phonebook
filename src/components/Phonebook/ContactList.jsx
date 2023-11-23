import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
