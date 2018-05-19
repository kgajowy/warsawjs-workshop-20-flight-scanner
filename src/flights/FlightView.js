import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {FlightModel} from "../shared/models/FlightModel";
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Error from 'material-ui/svg-icons/alert/warning'

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

class FlightView extends Component {
    render() {
        const { classes, flight, fitsMaxPrice } = this.props;
        const stepsIn = flight.inboundPath;

        return (
            <div className={[classes.root]}>
                {fitsMaxPrice && <Error color={'red'}/>}
                <ActionFlightTakeoff color={'blue'}/>
                Flight ID: {flight.id} - price {flight.price} <br />
                <Stepper activeStep={999} orientation="vertical">
                    {stepsIn.map((flyPath, index) => {
                        return (
                            <Step key={index}>
                                <StepLabel>From: {flyPath.airportFrom} > To: {flyPath.airportTo} (Duration: {flyPath.length})</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        );
    }
}

FlightView.propTypes = {
    classes: PropTypes.object,
    flight: PropTypes.instanceOf(FlightModel).isRequired,
    fitsMaxPrice: PropTypes.bool
};

FlightView.defaultProps = {
    fitsMaxPrice: true
};

export default withStyles(styles)(FlightView);
