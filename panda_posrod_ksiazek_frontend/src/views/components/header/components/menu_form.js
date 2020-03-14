import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import _Input from '../../_input/_input'

const new_styles = {
    notchedOutline: {
        borderColor: 'white !important'
    }
};

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_keywords: '',
        }
    };

    onTitleKeywordsChange = (event) => {
        this.setState({title_keywords: event.target.value})
    };

    onSubmit = (event) => {

    };

    render () {
        return (
            <>
                <form action={ (event) => this.onSubmit(event)}>
                    <_Input 
                        name="title_keywords"
                        label="Szukaj artykułu"
                        value={this.state.title_keywords}
                        onChange={this.onTitleKeywordsChange}
                        />
                </form>
            </>
        )
    };

}

export default withStyles(new_styles)(MenuForm)