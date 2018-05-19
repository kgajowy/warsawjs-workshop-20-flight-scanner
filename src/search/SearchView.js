import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";

export class SearchView extends Component {
    render() {
        const {onSearchClick} = this.props;
        return (
            <div>
                <PrimaryButton text={`Search for the flights`} onClick={onSearchClick}/>
            </div>
        )
    }
}

SearchView.propTypes = {
    onSearchClick: PropTypes.func.isRequired
};
