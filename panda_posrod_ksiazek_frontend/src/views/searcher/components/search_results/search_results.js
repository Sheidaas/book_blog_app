import React, { Component } from 'react'
import PostCard from '../../../components/post_card/post_card'
import Grid from '@material-ui/core/Grid'

class SearchResults extends Component {

    render () {
        const posts = this.props.search_result.map( (post) => (
            <>
                <Grid item xs={10} md={4}>
                    <PostCard key={post.id} alt="alt" hero_image={post.hero_image} slug={post.slug} title={post.title} content={post.content} published_date={post.published_date}/>       
                </Grid>
            
            </>
        ))
        return (
            <>
            <Grid container spacing={1} justify="center">
                {posts}
            </Grid>
                
            </>
        );
    }
}

export default SearchResults