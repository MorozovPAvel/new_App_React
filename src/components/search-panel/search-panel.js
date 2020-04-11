import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state ={
            term: ''
        }
        this.onUpdateSerach = this.onUpdateSerach.bind(this)
    }
    onUpdateSerach(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSerach(term);
    }

    render(){
        return(
            <>
                <div className="search-panel">
                    <input 
                        type="text"
                        placeholder="поиск по записям"
                        onChange={this.onUpdateSerach}
                    />
                </div>
            </>
        )
    }
}