import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class PostDetailView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidMount = () => {
        axios.post('127.0.0.1:8000/get_posts', JSON.stringify(this.props.match.params.slug))
    }

    render = () => {
        return (
            <h2> Detail view, article {this.props.match.params.slug}</h2>
        );
    }
}

export default withRouter(PostDetailView)