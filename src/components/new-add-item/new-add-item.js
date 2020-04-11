import React, {Component} from 'react';

import './new-add-item.css';

export default class NewAddItems extends Component{
    
    render(){
        return(
            <>
                <div className="new-add-item">
                    <input 
                    type="text"
                    placeholder="сoздать новую запись"
                    />
                    <button>Создать</button>
                </div>
            </>
        )
    }
}