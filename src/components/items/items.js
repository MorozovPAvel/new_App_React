import React, {Component} from 'react';

import './items.css'


export default class Items extends Component{
    
    render(){
        const {label, onToggleFullCard, deleteItem} = this.props;


        return(
            <div className='items'>
               <span onClick = {onToggleFullCard}>
                   {label}
                </span>
        <button onClick ={deleteItem}>&#x2716;</button>
            </div>
            
        )
    }
}