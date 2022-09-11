import React from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import ContactSubmissionForm from './ContactAddingForm';
// import ContactList from './ContactList';
import ContactFinder from './ContactFinder';

class App extends React.Component {
  state = {
    contacts: [
      { id: 11, name: 'Masha', number: '1111223213213123' },
      { id: 22, name: 'Pasha', number: '1331123213213123' },
      { id: 33, name: 'Sasha', number: '11111288813213123' },
      { id: 44, name: 'Natali', number: '11114322232131623' },
      { id: 55, name: 'Dasha', number: '999991223213213123' },
      { id: 66, name: 'Ninel', number: '1177111223213213123' },
      { id: 77, name: 'Andrei', number: '188888223213213123' },
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
      <div>
        <Container>
          <h1>Phonebook</h1>
          <ContactSubmissionForm
            onSubmit={this.contactSubmit}
            contacts={this.state.contacts}
          />
        </Container>
        <h2>Contacts</h2>
        {/* <ContactList contacts={this.state.contacts} /> */}
        <ContactFinder
          onDelete={this.contactDelete}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
