import React from 'react';
import StyledForm from './ContactAddingFormStyled';

class ContactSubmissionForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contacts = this.props.contacts;
    const addingContact = this.state.name;

    if (!contacts.some(entry => entry.name === addingContact)) {
      this.props.onSubmit(this.state);
      this.setState({
        name: '',
        number: '',
      });
    } else {
      alert(addingContact + ' is already in contacts.');
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <StyledForm>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="">Phone</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </StyledForm>
      </form>
    );
  }
}

export default ContactSubmissionForm;
