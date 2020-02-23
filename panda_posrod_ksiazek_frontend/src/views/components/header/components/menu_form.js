import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import _Input from '../../_input/_input'

const new_styles = {
    notchedOutline: {
        borderColor: 'white !important'
    }
}

class MenuForm extends Component {

    render () {
        const {classes} = this.props
        return (
            <>
                <form method="post" noValidate autoComplete="on">
                    <_Input 
                        name="title_keywords" 
                        placeholder="Tytuł"
                        label="Szukaj artykułu"
                        />
                </form>
            </>
        )
    }
}

export default withStyles(new_styles)(MenuForm)