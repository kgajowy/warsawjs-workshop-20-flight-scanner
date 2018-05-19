import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";
import {AirportModel} from "../shared/models/AirportModel";
import SelectAirport from "../shared/components/SelectAirport";

export class SearchView extends Component {

    state = {
        fromAirport: null,
        toAirport: null
    };

    _updateAirport = (key, airport) => {
        this.setState({
            [key]: airport
        }, () => {console.log(this.state)});
    };//no need to .bind to be aware of THIS

    render() {
        const {onSearchClick, airports} = this.props;
        return (
            <div>
                <SelectAirport onChange={(airport) => this._updateAirport(`fromAirport`, airport)} airports={airports} label={'FROM'}/>
                <SelectAirport onChange={(airport) => this._updateAirport(`toAirport`, airport)} airports={airports} label={'TO'}/>
                <br/>

                <PrimaryButton text={`Search for the flights`} onClick={onSearchClick}/>
            </div>
        )
    }
}

SearchView.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel))
};
