import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
                <button onClick={onBackClick}>Go back</button>
            </div>
        )
    }
}

FlightsView.propTypes = {
    onBackClick: PropTypes.func.isRequired
};