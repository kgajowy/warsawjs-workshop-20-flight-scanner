import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {FlightsView} from "./flights/FlightsView";
import {SearchView} from "./search/SearchView";

class App extends Component {

    state = {
        searchVisible: true
    };

    constructor(props){
        super(props);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

    //by default, context of this function is not within the React.Component itself!
    onSearchClick() {
        this.setState({
            searchVisible: false
        })
    }

    onBackClick() {
        this.setState({
            searchVisible: true
        }, () => {
            console.log(this.state);
        });
        console.log(this.state);
    }

    render() {
        const {searchVisible} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {searchVisible && <SearchView onSearchClick={this.onSearchClick}/>}
                {!searchVisible && <FlightsView onBackClick={this.onBackClick}/>}
            </div>
        );
    }
}

export default App;
