import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "material-ui/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import {AirportModel} from "../models/AirportModel";

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class SelectAirport extends Component {

    state = {
        selectedAirport: '' //cannot be null, as it would be un-controlled input
    };

    extractSelectedValue(event) {
        return event.target.value;
    }

    render() {
        const {onChange, airports, label, classes} = this.props;
        const {selectedAirport} = this.state;
        return (
            <div>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="from">{label}</InputLabel>
                <Select
                    autoWidth
                    value={selectedAirport}

                    onChange={(event) => {
                        const airportIndex = this.extractSelectedValue(event);
                        this.setState({
                            selectedAirport: airportIndex
                        });
                        //we need to call 'onChange' with the airport! and the value is just an index
                        onChange(airports[airportIndex]);
                    }}
                    inputProps={{
                        name: 'airport-select',
                        id: 'airport-select',
                    }}
                >
                    {airports.map((airport, index) => <MenuItem key={airport.id}
                                                       value={index}>{airport.toString()}</MenuItem>)}
                </Select>
                </FormControl>
            </div>
        )
    }
}

SelectAirport.propTypes = {
    onChange: PropTypes.func.isRequired,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
    label: PropTypes.string,
    classes: PropTypes.object.isRequired
};

SelectAirport.defaultProps = {
    label: 'SELECT'
};

export default withStyles(styles)(SelectAirport);