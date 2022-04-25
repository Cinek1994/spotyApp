import React from 'react';
import './App.css';
import Header from './header.js';
import ContentList from './contentList';

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
  } 
}  

  setAppArtists = (artists) => {
    this.setState({artists: artists});
  }
  render() {
    return (
    <div className="body-app container-fluid">
        <div className="container-xxl cont-body">
            <Header setAppArtists={this.setAppArtists}/>
            <ContentList artists={this.state.artists} />
            
        </div>
    </div>

  );
  }
}
