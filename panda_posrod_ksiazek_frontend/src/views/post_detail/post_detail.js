import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Grid from '@material-ui/core/Grid'
import PostDetailComponent from './post_detail_component/post_detail_component';

class PostDetailView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidMount = () => {
        axios.post('http://127.0.0.1:8000/get_posts/', JSON.stringify({slug: this.props.match.params.slug})).then(
            (response) => { this.setState({post: response.data[0]}) })
    }

    render = () => {
        console.log(this.state.post)
        if(this.state.post != null){
             let post = <PostDetailComponent post={this.state.post} />;
        return (
            <>
                <Header />
                    {post}
                <Footer />
            </>
        );
        }
        else{
            return (
                <>
                    <Header />
                    <Grid container>
                        <Grid item xs={10}>
                            <p> Cannot load post </p>
                        </Grid>
                    </Grid>
                    <Footer />
                </>
            );
        }
    }
}

export default withRouter(PostDetailView)