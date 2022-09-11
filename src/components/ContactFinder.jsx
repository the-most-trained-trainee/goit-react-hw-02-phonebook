import React from 'react';
import ContactEntry from './ContactEntry';

class ContactFinder extends React.Component {
  state = {
    find: '',
    found: [],
  };

  contacts = this.props.contacts;

  searchRequest = e => {
    this.setState({ find: e.currentTarget.value });
    this.findContact();
  };

  findContact = () => {
    const searchRequest = this.state.find;
    const result = this.contacts.filter(contact =>
      contact.name.includes(searchRequest)
    );
    this.setState({ found: result });
  };

  deleteContact = id => {
    const index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts.splice(index, 1);
    this.findContact();
  };

  render() {
    return (
      <div>
        <label htmlFor="">Find Contacts by Name</label>
        <input
          type="text"
          name="find"
          value={this.state.find}
          onChange={this.searchRequest}
        />
        <div>
          {this.state.found.map(contact => (
            <div>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => this.deleteContact(contact.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ContactFinder;
