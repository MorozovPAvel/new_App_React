import React from 'react';



import './full-item-card.css';


const FullItemCard = ({posts, toggleCard}) => {

const filterposts = posts.filter(e => e.id === toggleCard);

const element = filterposts.map((item) => {
    const {id, label, kind, profession, phone} = item;
      
    return (
        <li key ={id} className="list-items">
            <p>Имя:  {label}</p>
            <p>Пол: {kind}</p>
            <p>Профессия: {profession}</p>
            <p>Телефон: {phone}</p>
        </li>
    )
    
});
   
    return(
        <ul className="full-item-card">
            {element}
        </ul>
    )
}
export default FullItemCard;