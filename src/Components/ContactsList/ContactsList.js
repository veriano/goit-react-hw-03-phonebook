import PropTypes from 'prop-types';
import React from 'react';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.css';


function ContactsList ({ contacts, onDeleteContact }) {
    return (
     <>
        <ul className={s.list}>
        {contacts.map((contact) => (
          <ContactItem key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          /> 
        ))}
       </ul>
    </> 
    )
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
}

export default ContactsList;