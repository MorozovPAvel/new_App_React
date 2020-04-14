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
                {label: "Михин Михаил Михайлович", kind: "man", profession: "turner", phone: "+7900*******", comments: "text", id: 1},
                {label: "Иванов Иван Иванович", kind: "man", profession: "driver", phone: "+7900*******", comments: "", id: 2},
                {label: "Никонова Наталья Николаевна", kind: "woman", profession: "doctor", phone: "+7900*******", comments: "", id: 3},
                {label: "Михин Михаил Михайлович", kind: "man", profession: "turner", phone: "+7900*******", comments: "", id: 4},
                {label: "Иванов Иван Иванович", kind: "man", profession: "driver", phone: "+7900*******", comments: "", id: 5},
                {label: "Никонова Наталья Николаевна", kind: "woman", profession: "doctor", phone: "", comments: "", id: 6},
            ],
            term: '',
            toggleCard: 0,
            hidden: true
        };

        this.onToggleFullCard = this.onToggleFullCard.bind(this); 
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onHidden = this.onHidden.bind(this);
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

    deleteItem(id){
         this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return{
                data: newArr
            }
         });
    }

    onHidden(){
        (this.state.hidden) ? (this.setState({hidden: false})) : (this.setState({hidden: true}));
    }

    render(){
        const {data, term, toggleCard, hidden} = this.state;

        const visiblePost = this.searchPost(data, term);
        return(
            <>
               <Header/>
               <SearchPanel 
                   onUpdateSerach={this.onUpdateSerach}/>
               <div className="bodyApp">
                   <ListItems 
                   posts={visiblePost}
                   onToggleFullCard={this.onToggleFullCard}
                   deleteItem={this.deleteItem}/>
                   <FullItemCard 
                   posts={data}
                   toggleCard={toggleCard}/>
                </div>
                <NewAddItems
                    onHidden={this.onHidden}
                    hidden={hidden}/>
            </>
            
        )
    }
}