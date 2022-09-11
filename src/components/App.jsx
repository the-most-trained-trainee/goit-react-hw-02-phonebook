import React from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import ContactSubmissionForm from './ContactAddingForm';
import ContactFinder from './ContactFinder';

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  };

  contactSubmit = data => {
    const updatedContactList = this.state.contacts;
    const newContact = { id: nanoid(), name: data.name, number: data.number };
    updatedContactList.push(newContact);
    this.setState({ contacts: updatedContactList });
  };

  contactDelete = data => {
    this.setState({ contacts: data });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactSubmissionForm
          onSubmit={this.contactSubmit}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <ContactFinder
          onDelete={this.contactDelete}
          contacts={this.state.contacts}
        />
      </Container>
    );
  }
}

export default App;
