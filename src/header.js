import React from 'react';
import './App.css';
import {getArtist} from './API/spotify.js';



const CLIENT_ID = "d1cbe4ca949943779cf9dbb0bc491fde"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


export default class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            token: ""
     } 
     
     this.searchArtists = this.searchArtists.bind(this);
     this.logout = this.logout.bind(this);
     const hash = window.location.hash
      this.state.token  = window.localStorage.getItem("token")
    debugger;
      if (!this.state.token && hash) {
        debugger;
        this.state.token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
          window.location.hash = ""
          window.localStorage.setItem("token", this.state.token)
      }
    };
    setSearchValue(value){
        this.setState({ searchValue: value});
    }
    searchArtists(){
        debugger;
        if(this.state.token !== null && this.state.token !== undefined && this.state.token !== ''
        && this.state.searchValue !== null && this.state.searchValue !== undefined && this.state.searchValue !== '')
        {
            getArtist(this.state.token, this.state.searchValue).then((response) => {
                this.props.setAppArtists(response.data.artists.items);
            })
        }
    }
    logout(){
        debugger;
        this.setState({ token: null});
        window.history.replaceState({}, "", "/");
        window.localStorage.removeItem("token")
    }
    render()
    {
        return (
        <div className="topbar">
            <div className="search-in">
                <input className="form-control mr-sm-2" type="search" onChange={e => this.setSearchValue(e.target.value)} placeholder="Wpisz nazwę zespołu lub albumu" aria-label="Search"/>
                <button id="btn-search" className="form-btn-search" onClick={this.searchArtists}>Szukaj</button>
               
                {this.state.token === null || this.state.token === "" ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>LogIn</a> : <button onClick={this.logout}>Logout</button>}
            </div>
        </div>
    )
    }
}
