import React from 'react';

class ContactEntry extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}: {this.props.number}
      </li>
    );
  }
}

export default ContactEntry;
