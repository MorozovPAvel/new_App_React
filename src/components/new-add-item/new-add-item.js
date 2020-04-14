import React, {Component} from 'react';

import './new-add-item.css';

export default class NewAddItems extends Component{
    
    render(){
        const {onHidden, hidden} = this.props;
        let classNames = 'new-add-item';
        if(hidden){
            classNames +=' hidden';        
        }
        return(
            <> 
                <div className='new-add-item-button'>
                    <button onClick={onHidden}>Создать новую запись</button>
                </div>

                <div className={classNames}>
                        <input 
                        type="text"
                        placeholder="Имя"
                        />

                        <input 
                        type="text"
                        placeholder="пол"
                        />

                        <input 
                        type="text"
                        placeholder="профессия"
                        />

                        <input 
                        type="text"
                        placeholder="телефон"
                        />

                        <input 
                        type="text"
                        placeholder="комментарий"
                        />

                    <div className='new-add-item-button'>
                         <button>Добавить</button>
                    </div>    
                </div>

                
            </>
        )
    }
}