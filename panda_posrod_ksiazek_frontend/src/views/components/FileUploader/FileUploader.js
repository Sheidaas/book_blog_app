import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import './FileUploader.sass'

class FileUploader extends Component{


    render = () => {
        var image = null;
        if(this.props.file != null){
            image = (
                <img src={URL.createObjectURL(this.props.file)} alt={'hero-image'} id={'hero-image'}/>
            )
        }
        return (
            <>
                <Grid item xs={12}>
                    {image}
                </Grid>
                <Grid item xs={12}>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={ (event) => this.props.onChange(event) }
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" color="secondary" component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>

            </>
        )
    }

}

export default FileUploader