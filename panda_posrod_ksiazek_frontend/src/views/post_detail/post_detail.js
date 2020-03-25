import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Grid from '@material-ui/core/Grid'

class PostDetailView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidMount = () => {
        axios.post('http://127.0.0.1:8000/get_posts/', JSON.stringify({slug: this.props.match.params.slug})).then(
            (response) => { this.setState({post: response.data}) })
    }

    render = () => {
        if(this.state.post != null){
            const post = this.state.post.map( (_post) => (
                <>
                    <a href={"http://127.0.0.1:8000" + _post.hero_image} />
                </>
            ));
            return (
                <>
                    <Header />
                    <Grid container>
                        <Grid item xs={10}>
                            { post }
                            asfdfsdafs
                        </Grid>
                    </Grid>
                    <Footer />
                </>
            );
        }
        else{
            return ('Cannot load post')
        }
    }
}

export default withRouter(PostDetailView)