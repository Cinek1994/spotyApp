import React from 'react';
import './App.css';
import List from './list.js'

export default class ComponentList extends React.Component {
    render (){
        return(
        <div className="content-list search-list">
            <div className="title-content">
                <div className="title">
                    <h2>Ostatnio wyszukiwane</h2>
                </div>
            </div>
            <List artists={this.props.artists}/>
        </div>
    )
}
}
