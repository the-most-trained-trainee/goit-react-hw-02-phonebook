import React from 'react';
import ContactEntry from './ContactEntry';

class ContactList extends React.Component {
  contacts = this.props.contacts;

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.contacts.length > 0 &&
            this.contacts.map(contact => (
              <ContactEntry
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
