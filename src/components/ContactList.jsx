import React from 'react';
import PropTypes from 'prop-types';
import ContactEntry from './ContactEntry';
import ContactFinedStyled from './StyledContactFinder';
import EntriesListStyled from './StyledEntriesList';

class ContactList extends React.Component {
  state = {
    find: '',
    found: [],
  };

  contacts = this.props.contacts;

  searchRequest = e => {
    this.setState({ find: e.currentTarget.value });
    this.findContact(e.currentTarget.value);
  };

  findContact = searchRequest => {
    let result = [];
    if (searchRequest === '') {
      result = this.contacts;
    } else {
      result = this.contacts.filter(contact =>
        contact.name.toUpperCase().includes(searchRequest.toUpperCase())
      );
    }
    this.setState({ found: result });
  };

  componentDidMount() {
    this.findContact('');
  }

  deleteContact = id => {
    const index = this.contacts.findIndex(contact => contact.id === id);
    this.contacts.splice(index, 1);
    
    this.findContact(this.state.find);

    setTimeout(() => {
      if (this.state.found.length === 0) {
        this.setState({ find: '' });
        this.setState({ found: this.contacts });
      }
    }, 200);
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

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
