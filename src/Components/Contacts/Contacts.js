import PropTypes from 'prop-types';
import React from 'react';
import ElementContactList from '../ElementContactList';
import s from './Contacts.module.css';


function Contacts ({ contacts, onDeleteContact }) {
    return (
     <>
        <ul className={s.list}>
        {contacts.map(contact => (
          <ElementContactList key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={ onDeleteContact }
          /> 
        ))}
       </ul>
    </> 
    )
}

Contacts.propTypes = {
    contacts: PropTypes.array,
}

export default Contacts;