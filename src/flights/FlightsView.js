import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";
import {FlightModel} from "../shared/models/FlightModel";
import FlightView from "./FlightView";

export class FlightsView extends Component {
    render() {
        const {onBackClick, flights} = this.props;
        console.log(flights);
        return (
            <div>
                <ol>
                    {flights.map(flight => <FlightView key={flight.id} flight={flight}/>)}
                </ol>
                <PrimaryButton text={`Go back`} onClick={onBackClick}/>
            </div>
        )
    }
}

FlightsView.propTypes = {
    onBackClick: PropTypes.func.isRequired,
    flights: PropTypes.arrayOf(PropTypes.instanceOf(FlightModel))
};

FlightsView.defaultProps = {
    flights: []
};