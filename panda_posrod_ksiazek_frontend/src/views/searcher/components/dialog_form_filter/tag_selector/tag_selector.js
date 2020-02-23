import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import './tag_selector.sass'

class TagSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tag_chips: []
        }
    }

    componentWillMount () {
        axios.get('http://127.0.0.1:8000/get_tags/').then(
            (response) => {
                console.log(response.data)
                this.setState({tag_chips: response.data})
            })}

    render () {
        const tag_chips = this.state.tag_chips.map( (tag_chip) => {
            var index = this.props.selected_chips.indexOf(tag_chip.name)
            if (index > -1) {
                return (
                <>
                    <Grid item xs={"auto"}>
                        <Chip label={tag_chip.name} variant="outlined" key={tag_chip.name} onClick={ () =>  this.props.onTagChipClick(tag_chip.name)}/>
                    </Grid>
                </>
                )
            } else {
                return (
                <>
                    <Grid item xs={"auto"}>
                        <Chip label={tag_chip.name} variant="outlined" key={tag_chip.name} onClick={ () =>  this.props.onTagChipClick(tag_chip.name)} size="small"/>
                    </Grid>
                </>
            )
            }

        })
        return (
            <>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Typography> Tagi </Typography>
                </Grid>
                <Grid container justify="center">
                    {tag_chips}
                </Grid>
            </Grid>

            </>
        );
    }
}

export default TagSelector