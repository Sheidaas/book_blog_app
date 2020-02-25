import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import 'moment/locale/pl'
import './PostCard.sass'

class PostCard extends Component {

    render() {
        const hero_image = "http://127.0.0.1:8000" + this.props.hero_image;
        const tag_chips = this.props.tags.map( (tag) => (
            <Chip key={tag} variant={"outlined"} label={tag} size={"small"}/>
        ));
        return (
            <>
                <Card className="post-card" variant={"outlined"}>
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
                        <div>
                            { tag_chips }
                        </div>
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