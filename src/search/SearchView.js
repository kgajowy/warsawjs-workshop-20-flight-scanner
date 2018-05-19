import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";
import {AirportModel} from "../shared/models/AirportModel";
import SelectAirport from "../shared/components/SelectAirport";
import {CircularProgress} from "material-ui";
import {AirportService} from "../shared/services/AirportService";

export class SearchView extends Component {

    state = {
        fromAirport: null,
        toAirport: null,
        flightsPending: false
    };

    _updateAirport = (key, airport) => {
        this.setState({
            [key]: airport
        }, () => {
            console.log(this.state)
        });
    };//no need to .bind to be aware of THIS

    //with arrow notation, we are not loosing context, therefore bind is not necessary!
    onSearchPress = () => {
        this.setState({
            flightsPending: true
        }, () => {
            AirportService.fetchFlights(this.state.fromAirport, this.state.toAirport).then(flights => {
                this.setState({
                    flightsPending: false
                }, () => this.props.onSearchClick(flights))
            });
        });
    };

    render() {
        const {airports, pending} = this.props;
        const {fromAirport, toAirport, flightsPending} = this.state;
        const fieldsSelected = !Boolean(fromAirport && toAirport);
        return (
            <div>
                {!pending &&
                (<div>
                    <SelectAirport onChange={(airport) => this._updateAirport(`fromAirport`, airport)}
                                   airports={airports}
                                   label={'FROM'}/>
                    < SelectAirport onChange={(airport) => this._updateAirport(`toAirport`, airport)}
                                    airports={airports} label={'TO'}/>
                </div>)}
                <br/>

                {(pending || flightsPending) && <CircularProgress />}
                <br />
                {!flightsPending && <PrimaryButton text={`Search for the flights`}
                               onClick={this.onSearchPress}
                               disabled={fieldsSelected}
                />}
            </div>
        )
    }
}

SearchView.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
};

