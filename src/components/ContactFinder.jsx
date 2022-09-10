import React from 'react';
import ContactEntry from './ContactEntry';

class ContactFinder extends React.Component {
  state = {
    find: '',
    found: [],
  };

  contacts = this.props.contacts;

  requestSearch = e => {
    this.setState({ find: e.currentTarget.value });
    this.findContacts();
  };

  findContacts = () => {
    const searchRequest = this.state.find;
    const result = this.contacts.filter(contact =>
      contact.name.includes(searchRequest)
    );
    this.setState({ found: result });
  };

  render() {
    return (
      <div>
        <label htmlFor="">Find Contacts by Name</label>
        <input
          type="text"
          name="find"
          value={this.state.find}
          onChange={this.requestSearch}
        />
        <div>
          {this.state.found.map(contact => (
            <p>{contact.name}: {contact.number}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default ContactFinder;
