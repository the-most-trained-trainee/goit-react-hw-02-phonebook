import React from 'react';
import ContactEntry from './ContactEntry';
import ContactFinedStyled from './ContactFinderStyled';
import EntriesListStyled from './EntriesListStyled';

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

    // const toAdd = this.state.find === "" ? this.contacts : result;
    // this.setState({ found: toAdd });

    this.setState({ found: result });
  };

  deleteContact = id => {
    const index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts.splice(index, 1);
    this.findContact();
  };

  render() {
    return (
      <ContactFinedStyled>
        <label htmlFor="">Find Contacts by Name</label>
        <input
          type="text"
          name="find"
          value={this.state.find}
          onChange={this.searchRequest}
        />
        <EntriesListStyled>
          {/* {(this.state.found.length > 0 ? this.state.found : this.contacts).map(
            contact => (
              <ContactEntry
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={this.deleteContact}
              />
            )
          )} */}
          {this.state.found.map(contact => (
            <ContactEntry
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={this.deleteContact}
            />
          ))}
        </EntriesListStyled>
      </ContactFinedStyled>
    );
  }
}

export default ContactFinder;
