import React, { Component } from 'react';
import footer from './footer.sass'
import { Grid, Typography, Paper } from '@material-ui/core'

class Footer extends Component{
    render () {
        return (
            <>
            <Grid container direction="row" justify="space-around" id="footer" spacing={1}>
                <Grid xs={6} container direction="row" justify="flex-end">
                <div>
                <ul className="lists">
                            <li><a href="#"> Strona główna </a></li>
                            <li><a href="#"> Wyszukiwarka postów </a></li>
                            <li><a href="#"> Napisz do mnie </a></li>
                            <li><a href="#"> O mnie </a></li>
                        </ul> 
                </div>

                </Grid>
                <Grid xs={6} container direction="row" justify="flex-start">
                    <ul className="lists">
                        <li><a href="#"> Tag jeden </a></li>
                        <li><a href="#"> Dwa Tag </a></li>
                        <li><a href="#"> Trzy tag </a></li>
                        <li><a href="#"> O mnie </a></li>
                    </ul> 
                </Grid>
            </Grid>
            </>
        );
    }
}

export default Footer