import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/Contacts';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  addContact = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    }
    this.setState(({ contacts }) => {
      for (const contact of contacts) {
        if (contact.name.toLowerCase() === data.name.toLowerCase()) {
          alert(`${data.name} already in contacts.`);
          return;
        }
    }
        return {
          contacts: [contact, ...contacts],
        }
      })
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normolizedFilter))
  }

  componentDidUpdate (prevProps, prevState) {

    if(this.state.contacts !== prevState.contacts) {

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
   npm start
    return (
      <>
        <h1 className={s.Title}><b>Phonebook</b></h1>
      <ContactForm onSubmitHandler={ this.addContact } />
      
        <h2 className={s.Title}><b>Contacts</b></h2>
        <Filter value={ filter } onChange={ this.changeFilter }/>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={ this.deleteContact }  />
        </>
    )
  }

}
export default App;