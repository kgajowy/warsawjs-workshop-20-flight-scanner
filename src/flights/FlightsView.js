import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";
import {FlightModel} from "../shared/models/FlightModel";
import FlightView from "./FlightView";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class FlightsView extends Component {
    render() {
        const {onBackClick, flights} = this.props;
        return (
            <div>
                <List component="nav">
                    {flights.map(flight => {
                        return (
                                <ListItem key={flight.id} >
                                    <FlightView flight={flight}/>
                                </ListItem>
                        )
                    })}
                </List>
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