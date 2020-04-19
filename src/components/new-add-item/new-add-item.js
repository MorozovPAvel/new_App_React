import React, {Component} from 'react';

import './new-add-item.css';

export default class NewAddItems extends Component{
    constructor(props){
        super(props);
        this.state = {
                label: "", 
                kind: "", 
                profession: "", 
                phone: "", 
                comments: "" 
               
        }
        
        this.onValueChangeLabel = this.onValueChangeLabel.bind(this);
        this.onValueChangeKind = this.onValueChangeKind.bind(this);
        this.onValueChangeProfession = this.onValueChangeProfession.bind(this);
        this.onValueChangePhone = this.onValueChangePhone.bind(this);
        this.onValueChangeComments = this.onValueChangeComments.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    onValueChangeLabel(e){
        this.setState({
            label: e.target.value
        })
    }
    onValueChangeKind(e){
        this.setState({
            kind: e.target.value
        })
    }
    onValueChangeProfession(e){
        this.setState({
            profession: e.target.value
        })
    }
    onValueChangePhone(e){
        this.setState({
            phone: e.target.value
        })
    }
    onValueChangeComments(e){
        this.setState({
            comments: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const {label, kind, profession, phone, comments} = this.state;
        this.props.addItem(label, kind, profession, phone, comments);
        this.setState({
            label: '', 
            kind: '',
            profession: '',
            phone: '',
            comments: ''
        });
    }

    render(){
        const {onHidden, hidden} = this.props;
        const {label, kind, profession, phone, comments} = this.state;
        let classNames = 'new-add-item';
        if(hidden){
            classNames +=' hidden';        
        }
        return(
            <> 
                <div className='new-add-item-button'>
                    <button onClick={onHidden}>Создать новую запись</button>
                </div>

                <form 
                className={classNames}
                onSubmit={this.onSubmit}>
                        <input 
                        type="text"
                        placeholder="Имя"
                        onChange={this.onValueChangeLabel}
                        value={label}
                        />

                        <input 
                        type="text"
                        placeholder="пол"
                        onChange={this.onValueChangeKind}
                        value={kind}
                        />

                        <input 
                        type="text"
                        placeholder="профессия"
                        onChange={this.onValueChangeProfession}
                        value={profession}
                        />

                        <input 
                        type="text"
                        placeholder="телефон"
                        onChange={this.onValueChangePhone}
                        value={phone}
                        />

                        <input 
                        type="text"
                        placeholder="комментарий"
                        onChange={this.onValueChangeComments}
                        value={comments}
                        />

                        <div className='new-add-item-button'>
                            <button 
                                type='submit'
                            >Добавить</button>
                        </div>   
                </form>

                
            </>
        )
    }
}