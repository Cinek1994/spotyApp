import React from 'react';
import './App.css';

export default class Item extends React.Component{
    renderGenres(){

    }
    render(){
        return(
        <div className="list">
            <div className="item">
                <div className="img-item">
                    <img src={`${this.props.artist.images[0].url}`}/>
                </div>
                <div className="name-item">
                    <h3>{this.props.artist.name}</h3>
                    {this.renderGenres()}
                </div>
            </div>
        </div>
    )
}
}