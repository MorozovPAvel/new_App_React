import React, {Component} from 'react';
import './header.css';


export default class Header extends Component{
    render (){
        return(
            <div className="header">
                <p>Список клиентов</p>
                <p><img src='https://cont.ws/uploads/pic/2017/3/socium%20%281%29.jpg' alt=''></img></p>
                
            </div>
        )
    }
}