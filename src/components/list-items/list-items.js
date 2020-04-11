import React from 'react';
import Items from "../items/items";
    
import './list-items.css';

const ListItems = ({posts, onToggleFullCard}) => {
    const elemenst = posts.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <li key ={item.id} className="list-items">
                <Items {...itemProps}
                onToggleFullCard = {() => onToggleFullCard(item.id)}/>
            </li>
        )
    });
    return(
        <ul>
            {elemenst}
        </ul>
    )
}
export default ListItems;
