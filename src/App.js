import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {FlightsView} from "./flights/FlightsView";
import {SearchView} from "./search/SearchView";

class App extends Component {

    searchPressed() {
        console.log('search pressed');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <SearchView onClick={this.searchPressed}/>
                <FlightsView/>
            </div>
        );
    }
}

export default App;
