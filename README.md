# warsawjs-workshop-20-flight-scanner

Repository for React Basics Workshop which will take (took) place on 20.05.2018 in Warsaw.

## What we will build?

A simple app like LOT/Wizzair search for multiple airlines. App involves simple search criteria, loading results from online API, presenting the results and more.

## Main steps

Please find the proposed agenda below - what we will build step by step.

### App Core

- [ ] prepare the environment & create app
    * create repository on git and clone it
    * `npm i create-react-app -g` (sudo/admin)
    * `create-react-app .` (`.` == cwd dir)
    * `npm start`
    * open `http://localhost:3000`
    * `https://atom.io/packages/react` - IDE & support for JFX

- [ ] make a simple change and observe how the results change
    * after running the application, change some text or add additional tags and observe live reload

- [ ] a few words about development/production "builds"
    * `npm start`
    * `npm run build` & dist

### Pseudo-scenes / main states / navigation

- [ ] what is a React Component?
- [ ] creating and including a simple component ("Next Button")

    ```
    import React, {Component} from 'react';

    export class SearchButton extends Component {
        render() {
            return (
                <button onClick={console.log}>Next</button>
            )
        }
    }

    // in App.js
    import {SearchButton} from './shared/components/SearchButton'
    ```

- [ ] "props" - what it is?

    * make a text in our Button be "configurable"

    ```
    render() {
        const {text} = this.props; //destructing
        return (
            <button onClick={console.log}>{text}</button>
        )
    }
    ```

    * what happened to our app?

    ```
    <SearchButton text={'Go!'} />
    ```

    * should I really remember which props are where?
    `npm i prop-types --save`

    ```
    import PropTypes from 'prop-types';
    // after class declaration
    SearchButton.propTypes = {
        text: PropTypes.string
    };
    ```

    Try writing `<SearchButton` and press space (or any other way to see hints!)

    * ... but I want to mark it as mandatory!

    ```
    //..
        PropTypes.string.isRequired
    //..

    ```

    will throw us an error as expected!

- [ ] creating a target component with results

    ```
    import React, {Component} from 'react';
    import PropTypes from 'prop-types';

    export class FlightsView extends Component {
        render() {
            return (
                <div>
                    <ol>
                        <li>Flight #1</li>
                        <li>Flight #2</li>
                        <li>Flight #3</li>
                    </ol>
                    <button>Go back</button>
                </div>
            )
        }
    }

    FlightsView.propTypes = {

    };
    ```

    * try to display it directly in the App.js

- [ ] making them "work" together (naive way)

    * a few words about component architecture and responsibilities
    * influence on Unit Tests

    * Create FlightsView
    ```
    import React, {Component} from 'react';
    import PropTypes from 'prop-types';

    export class FlightsView extends Component {
        render() {
            return (
                <div>
                    <ol>
                        <li>Flight #1</li>
                        <li>Flight #2</li>
                        <li>Flight #3</li>
                    </ol>
                    <button>Go back</button>
                </div>
            )
        }
    }

    FlightsView.propTypes = {

    };
    ```

    * Create SearchView:

    ```
    import React, {Component} from 'react';
    import PropTypes from 'prop-types';
    import {SearchButton} from "../shared/components/SearchButton";

    export class SearchView extends Component {
        render() {
            const {onClick} = this.props;
            return (
                <div>
                    <SearchButton text={`Search for the flights`} onClick={onClick}/>
                </div>
            )
        }
    }

    SearchView.propTypes = {
        onClick: PropTypes.func.isRequired
    };

    ```

    * and modify SearchButton to make use of passed onClick prop
    ```
    <button onClick={onClick}>{text}</button>
    ```

    Don't forget about new prop for destruct and propTypes!

    * wrap up relevant changes in App.js:
    ```
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
     ```

- [ ] keeping values in "state" - what it is and how it differs from props? (change over time vs. const)
    * pull branch `step_1` with previous changes if necessary
    * add our first state
    ```
    state = {
        searchVisible: true
    };

    searchPressed() {
        this.setState({
            searchVisible: false
        })
    }
    ```
    * why it fails? what about `this` and where our `context` went? Stateful component!
    ```
    constructor(props){
            super(props);
            this.searchPressed = this.searchPressed.bind(this);
        }
    ```
    * being aware of not making `bind` within render
    * conditional rendering
    ```
    //inside render()
    {searchVisible && <SearchView onClick={this.searchPressed}/>}
    {!searchVisible && <FlightsView/>}
    ```
    * naming convenction (not strictly React) - onPress vs onPressed
    * adding a way back (exercise)
    * a few words about setState async
    ```
    onBackClick() {
        this.setState({
            searchVisible: true
        }, () => {
            console.log(this.state);
            });
        console.log(this.state);
    }
    ```


- [ ] a few words about router https://reacttraining.com/react-router/web/guides/quick-start

### Adding dependencies - material-ui / styling

- [ ] installing the dependency
- [ ] changing "Next Button" to use materia-ui
- [ ] testing a few other component we will need (Datepicker, ActivityIndicator/Spinner)
- [ ] Create 2 inputs with "dummy" source

### Adding dependencies - axios / API Service

- [ ] installing the dependency
- [ ] making a "Service" to fetch Locations
- [ ] few words about Views, Models and Services

### Basic inputs for searcher

- [ ] keeping values in "state" - what it is and how it differs from props? (change over time vs. const)
- [ ] make the inputs "aware" of pending/loading state (locations)
- [ ] provide data to inputs
- [ ] keeping input current value in state

### Spinner/Loader state - a few words about UX/UI

- [ ] basic "validation" and button look
- [ ] pending state & ActivityIndicator
- [ ] calling the hero API - FlightService & FlightModel 
- [ ] transition

### Results Model & Presentation

- [ ] displaying the Flight Model
- [ ] (l)oops!

### Basic filtering - client side

- [ ] adding min/max (price) inputs+checkboxes & listeners
- [ ] filtering the results

### Simple Animations :fireworks:

- [ ] Adding "expand mode" with details of given flight

### [optional] 
 - [ ] \(optional) Adding map to "expand mode"
 
