import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const new_styles = {}

class _RADIO extends Component {
    render () {
        return (
            <>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Sortowanie </FormLabel>
                    <RadioGroup value={this.props.sort_method} aria-label="sort_method" name="radios" onChange={( event ) => this.props.onChange(event)}>
                        <FormControlLabel value="latest" control={<Radio />} label="Od najnowszych"/>
                        <FormControlLabel value="oldest" control={<Radio />} label="Od najstarszych"/>
                    </RadioGroup>
                </FormControl>
            </>
        );
    }
}

export default withStyles(new_styles)(_RADIO)