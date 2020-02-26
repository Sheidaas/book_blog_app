import React, { Component } from 'react'
import axios from 'axios'
import InCarousel from './InCarousel/InCarousel'
import InLatestPosts from './InLatestPosts/InLatestPosts'
import { Grid } from '@material-ui/core'
import './index.sass'
import {withRouter} from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

class IndexView extends Component{
    constructor(props){
        super(props);
        this.state = {
            hottests_posts: [],
            latest_posts: [],
            user_is_authenticated: false,
            error: "",
        };
    }

    componentDidMount = () => {
        axios.get('http://127.0.0.1:8000/' ).then( ( response ) => {
            console.log(response.data, 'this is response data')
            this.setState({
                hottests_posts: response.data.hottests_posts,
                latest_posts: response.data.latest_posts,
                is_user_authenticated: response.data.is_user_authenticated,
            })
        });
    };

    render = () => {
        console.log(this.state.latest_posts)
        return (
            <>
            <Header is_user_authenticated={this.state.is_user_authenticated}/>
            <Grid container>
              <Grid item xs={12}>
                <InCarousel hottests_posts={this.state.hottests_posts}/>
              </Grid>
              <Grid item xs={12}>
                  <InLatestPosts latest_posts={this.state.latest_posts}/>
              </Grid>
              <Footer />
            </Grid>
            </>
        );
    }
}

export default withRouter(IndexView)