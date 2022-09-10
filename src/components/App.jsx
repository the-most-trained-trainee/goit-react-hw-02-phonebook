import React from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import ContactAddingForm from './ContactAddingForm';
import ContactList from './ContactList';
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
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const updatedContactList = this.state.contacts;
    const newContact = { id: nanoid(), name: data.name, number: data.number };
    updatedContactList.push(newContact);
    this.setState({ contacts: updatedContactList });
  };

  render() {
    return (
      <Container>
        <ContactAddingForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
        <ContactFinder contacts={this.state.contacts} />
      </Container>
    );
  }
}

// const test = [
//   {id: 11, name: "Masha", phone: "1111223213213123" },
//   {id: 22, name: "Pasha", phone: "1331123213213123" },
//   {id: 33, name: "Sasha", phone: "11111288813213123" },
//   {id: 44, name: "Natali", phone: "11114322232131623" },
//   {id: 55, name: "Dasha", phone: "999991223213213123" },
//   {id: 66, name: "Ninel", phone: "1177111223213213123" },
//   {id: 77, name: "Andrei", phone: "188888223213213123" }
// ]

export default App;
