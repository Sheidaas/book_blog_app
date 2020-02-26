import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './carousel.sass'


class InCarousel extends Component{
    render () {

        const posts = this.props.hottests_posts.map((post) =>
            <Carousel.Item key={post.id}>
                <Link to={'articles/' + post.slug}>
                    <IndexCarouselItemImage hero_image={post.hero_image} />
                    <Carousel.Caption>
                        <h3 className="postTitle"> { post.title } </h3>
                        <p className="postContent"> Nulla vitae elit libero, a pharetra augue mollis interdum. </p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>

        )
        return (
            <>
            <Carousel>
                {posts}
            </Carousel>
            </>
        );
    }

}

class IndexCarouselItemImage extends Component{
    constructor(props){
        super(props);
        this.state = {hero_image: 'http://127.0.0.1:8000' + this.props.hero_image}
    }

    render () {
        return (
            <>
                <img 
                src={this.state.hero_image} 
                alt='this is photo' 
                className="d-block imageBanner"/>
            </>
        );
    }
}

export default InCarousel