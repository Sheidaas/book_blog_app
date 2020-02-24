import React, { Component } from 'react'
import InCarousel from './components/carousel/carousel'
import InLatestPosts from './components/latest_posts/latest_posts'
import { Grid } from '@material-ui/core'
import styles from './index.sass'
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

    componentDidMount() {
        fetch("http://127.0.0.1:8000/", {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }})
          .then(res => res.json())
          .then((context) => {
              console.log(context)
              this.setState({
                hottests_posts: context.hottests_posts,
                latest_posts: context.latest_posts,
                is_user_authenticated: context.is_user_authenticated,
              })
            },
            // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
            // nie w bloku catch(), aby nie przetwarzać błędów
            // mających swoje źródło w komponencie.
            (error) => {
              this.setState({
                error: error
              });
            }
          );
        console.log(this.state.latest_posts);
        console.log(this.state.error);

    }

    render () {
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