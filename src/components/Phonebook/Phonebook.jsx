import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number, contacts } = this.state;

    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const numberExists = contacts.some(contact => contact.number === number);

    if (nameExists) {
      alert(
        'The contact with this name already exists in the phonebook. Please choose a different name.'
      );
      return;
    }

    if (numberExists) {
      alert(
        'This phone number already exists in the phone book. Please choose a different phone number.'
      );
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields to add a contact.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
      filter: '',
    });
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleDelete = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: updatedContacts,
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div>
          <label>
            Search contact:
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={this.handleFilterChange}
            />
          </label>
        </div>
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Phonebook;
