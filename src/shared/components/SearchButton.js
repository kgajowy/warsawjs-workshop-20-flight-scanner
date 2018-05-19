import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SearchButton extends Component {
    render() {
        const {text, onClick} = this.props; //destructing
        return (
            <button onClick={onClick}>{text}</button>
        )
    }
}


SearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};