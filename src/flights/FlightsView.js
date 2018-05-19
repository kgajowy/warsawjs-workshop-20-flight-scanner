import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from "../shared/components/PrimaryButton";

export class FlightsView extends Component {
    render() {
        const {onBackClick} = this.props;
        return (
            <div>
                <ol>
                    <li>Flight #1</li>
                    <li>Flight #2</li>
                    <li>Flight #3</li>
                </ol>
                <PrimaryButton text={`Go back`} onClick={onBackClick}/>
            </div>
        )
    }
}

FlightsView.propTypes = {
    onBackClick: PropTypes.func.isRequired
};