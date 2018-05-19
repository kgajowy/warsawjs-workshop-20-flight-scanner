import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "material-ui/MenuItem";
import Select from "@material-ui/core/Select";
import {AirportModel} from "../shared/models/AirportModel";

export class SearchView extends Component {
    render() {
        const {onSearchClick, airports} = this.props;
        return (
            <div>
                <InputLabel htmlFor="from">FROM:</InputLabel>
                <Select
                    value={''}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'from',
                        id: 'from',
                    }}
                >
                    {airports.map(airport => <MenuItem key={airport.id} value={airport}>{airport.city}</MenuItem>)}
                </Select>

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
