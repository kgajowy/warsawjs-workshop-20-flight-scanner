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
