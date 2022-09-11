import React from 'react';
import ContactEntryStyled from './ContactEntryStyled';

class ContactEntry extends React.Component {
  render() {
    return (
      <ContactEntryStyled>
        <span>{this.props.name}: </span>
        <span>{this.props.number}</span>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          Delete
        </button>
      </ContactEntryStyled>
    );
  }
}

export default ContactEntry;
