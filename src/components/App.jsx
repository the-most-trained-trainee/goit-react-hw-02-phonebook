import React from 'react';
import { nanoid } from 'nanoid';
import Container from './Container/StyledContainer';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactSearch = request => {
    this.setState(prevState => {
      return { filter: request };
    });
  };

  getFilteredContacts = () => {
    let result = [];
    if (this.state.filter === '') {
      result = this.state.contacts;
    } else {
      result = this.state.contacts.filter(contact =>
        contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
      );
    }
    return result;
  };

  contactSubmit = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  onDelete = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.contactSubmit}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter onSearch={this.contactSearch} />
        <ContactList
          onDelete={this.onDelete}
          contacts={this.getFilteredContacts()}
        />
      </Container>
    );
  }
}

export default App;
