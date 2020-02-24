import React, {Component} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import 'moment/locale/pl'
import './post_card.sass'

class PostCard extends Component {

    render() {
        const hero_image = "http://127.0.0.1:8000" + this.props.hero_image;
        return (
            <>
                <Card className="post-card" variant="outlined">
                    <CardActionArea>
                        <Link to={"/articles/" + this.props.slug}>
                            <CardMedia
                                className="post-card-media"
                                image={hero_image}
                                title={this.props.alt}/>
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography>
                            <Moment locale="pl" fromNow>{this.props.published_date}</Moment>
                        </Typography>
                        <Typography variant="h6"
                                    component="div"
                                    className="post-card-title">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2"
                                    color="textSecondary"
                                    component="div"
                                    className="post-card-content">
                            {this.props.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"> Przejdź do postu </Button>
                    </CardActions>

                </Card>
            </>
        );
    }
}

export default PostCard