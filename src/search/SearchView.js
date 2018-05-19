import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from "../shared/components/SearchButton";

export class SearchView extends Component {
    render() {
        const {onSearchClick} = this.props;
        return (
            <div>
                <SearchButton text={`Search for the flights`} onClick={onSearchClick}/>
            </div>
        )
    }
}

SearchView.propTypes = {
    onSearchClick: PropTypes.func.isRequired
};
