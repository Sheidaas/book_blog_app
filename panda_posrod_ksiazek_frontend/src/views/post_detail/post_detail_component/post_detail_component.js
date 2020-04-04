import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import './post_detail_component.sass';

class PostDetailComponent extends Component {
    render = () => {
        let tag_chips = this.props.post.tags.map( (tag) => (
            <Chip label={tag} variant={'outlined'}/>
        ))
        return (
            <>
                <div className={'free-space'}></div>
                <Grid container justify={'center'}>
                    <Grid item xs={12} md={8} className={'content-align'}>
                        <img src={"http://127.0.0.1:8000" + this.props.post.hero_image}
                             alt={this.props.post.image_alt}
                             crossOrigin={'anonymous'}
                             className={'hero_image'}/>
                    </Grid>
                    <Grid item xs={12} md={8} className={'content-align'}>
                        <Typography variant={'h3'}> {this.props.post.title} </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {this.props.post.content}
                    </Grid>
                    <Grid item xs={12} md={8} className={'content-align'}>
                        { tag_chips }
                    </Grid>
                    <Grid item xs={12} md={8} className={'content-align'}>
                        <p> { this.props.post.published_date } </p>
                    </Grid>
                </Grid>
                <div className={'free-space'} />
                </>
        )
    }
}


export default PostDetailComponent