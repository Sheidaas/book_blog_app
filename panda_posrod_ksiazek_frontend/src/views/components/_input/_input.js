import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import './_input.sass'


const new_styles = {
    notchedOutline: {
        borderColor: 'white !important'
    }
}

class _Input extends Component {

    render () {
        const { classes } = this.props;
        return (
            <>
                <TextField
                    className="input"
                    size="small" 
                    label={this.props.label}
                    value={this.props.value}
                    color="inherit"
                    variant="outlined"
                    name={this.props.name}
                    onChange={ (event) => this.props.onChange(event) }
                    InputLabel={{className: "input-label"}}
                    InputProps={{
                        classes: classes
                    }}
                />
            </>
        );
    }
}

export default withStyles(new_styles)(_Input)