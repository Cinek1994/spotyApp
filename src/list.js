import React from 'react';
import './App.css';
import Item from './item.js'

export default class List extends React.Component {
    renderItems(){
        const artistList = [];
        
        for (let  artist of this.props.artists) {
            debugger;
            artistList.push(<Item artist = { artist }/>);
          }
        return artistList;
    }
    render(){ 
    return (<div className="list-belt">
        <div className="list">
            {this.renderItems()}
        </div>
    </div>
    )
    }
}
