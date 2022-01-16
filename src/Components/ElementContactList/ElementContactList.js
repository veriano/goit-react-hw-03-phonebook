import React from "react";
import PropTypes from "prop-types";
import s from './ElementContactList.module.css';

function ElementContactList({ id, name, number, onDelete }) {

    return (
        <li className={s.Item}><span><b>{name}</b></span>: <span><b>{number}</b>
        </span><button className={s.Button} type='button' onClick={ () => onDelete(id) }>Delete</button></li>
    )
}

ElementContactList.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
}

export default ElementContactList;
