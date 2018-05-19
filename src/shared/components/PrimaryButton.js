import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

export class PrimaryButton extends Component {
    render() {
        const {text, onClick} = this.props; //destructing
        return (
            <RaisedButton primary onClick={onClick} label={text}/>
        )
    }
}


PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};