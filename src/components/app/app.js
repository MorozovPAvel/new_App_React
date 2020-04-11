import React, {Component} from 'react';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import ListItems from '../list-items/list-items';
import FullItemCard from '../full-item-card/full-item-card';
import NewAddItems from '../new-add-item/new-add-item';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: "Михин Михаил Михайлович", kind: "man", profession: "turner", id: 1},
                {label: "Иванов Иван Иванович", kind: "man", profession: "driver", id: 2},
                {label: "Никонова Наталья Николаевна", kind: "woman", profession: "doctor", id: 3},
                {label: "Михин Михаил Михайлович", kind: "man", profession: "turner", id: 4},
                {label: "Иванов Иван Иванович", kind: "man", profession: "driver", id: 5},
                {label: "Никонова Наталья Николаевна", kind: "woman", profession: "doctor", id: 6},
            ],
            term: '',
            toggleCard: 0
        };

        this.onToggleFullCard = this.onToggleFullCard.bind(this); 
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
    }
  
    onToggleFullCard(id){
        this.setState({
            toggleCard: id
        });
        
     }
     searchPost(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }
     onUpdateSerach(term) {
         this.setState({term});
     }


    render(){
        const {data, term, toggleCard} = this.state;

        const visiblePost = this.searchPost(data, term);
        return(
            <>
               <Header/>
               <SearchPanel 
                   onUpdateSerach={this.onUpdateSerach}/>
               <div className="bodyApp">
                   <ListItems 
                   posts={visiblePost}
                   onToggleFullCard = {this.onToggleFullCard}/>
                   <FullItemCard 
                   posts={data}
                   toggleCard={toggleCard}/>
                </div>
                <NewAddItems/>
            </>
            
        )
    }
}