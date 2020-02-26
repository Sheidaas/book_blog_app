import React, { Component } from 'react'
import './InLatestPosts.sass'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import PostCard from '../InLatestPosts/InLatestPosts.js'

class InLatestPosts extends Component{

    render () {

        let big_cards = this.props.latest_posts.slice(0, 2);
        let small_cards = this.props.latest_posts.slice(2, 5);

        big_cards = big_cards.map( (post) => (
            <Grid item xs={12} md={6}>
                <PostCard key={post.id} alt="alt" tags={post.tags} hero_image={post.hero_image} slug={post.slug} title={post.title} content={post.content} published_date={post.published_date}/>
            </Grid>
        ));

        small_cards = small_cards.map( (post) => (
            <Grid item xs={12} md={4}>
                <PostCard key={post.id} alt="alt" tags={post.tags} hero_image={post.hero_image} slug={post.slug} title={post.title} content={post.content} published_date={post.published_date}/>
            </Grid>
        ));

        return (
            <>
            <Container>
            <Typography variant="h4" id="header"> Najnowsze treści </Typography> 
            <Grid container spacing={1}>   
                    {big_cards}
                <Grid container spacing={1}>
                    {small_cards}
                </Grid>
            </Grid>
            <Grid id="header">
                <Button 
                id="other-posts-button"
                href="/searcher/"
                > Zobacz inne nowe posty </Button>
            </Grid>
            </Container>
            </>
        );
    }
}

export default InLatestPosts