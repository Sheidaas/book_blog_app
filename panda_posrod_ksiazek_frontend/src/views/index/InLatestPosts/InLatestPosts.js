import React, { Component } from 'react'
import './InLatestPosts.sass'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import PostCard from '../../components/PostCard/PostCard'

class InLatestPosts extends Component{

    renderCards = (posts, width) => {
        return posts.map( (post) => (
            <Grid item xs={12} md={width}>
                <PostCard key={post.id}
                          alt="alt"
                          tags={post.tags}
                          hero_image={post.hero_image}
                          slug={post.slug}
                          title={post.title}
                          content={post.content}
                          published_date={post.published_date}/>
            </Grid>
        ))
    };

    render = () => {
        const big_cards = this.renderCards(this.props.latest_posts.slice(0, 2), 6);
        const small_cards = this.renderCards(this.props.latest_posts.slice(2, 5), 4);
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
                        href="/searcher/"> Zobacz inne nowe posty </Button>
                </Grid>
            </Container>
        </>
        );
    }
}

export default InLatestPosts