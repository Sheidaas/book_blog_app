import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class PostDetailView extends Component{

    render () {
        return (
            <h2> Detail view, article {this.props.match.params.slug}</h2>
        );
    }
}

export default withRouter(PostDetailView)