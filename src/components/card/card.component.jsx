import { Component } from "react";
import './card.styles.css';

const Card = ({ robot }) => {
    const { id, name, email } = robot;
    return (
        <div className='card'>
            <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;