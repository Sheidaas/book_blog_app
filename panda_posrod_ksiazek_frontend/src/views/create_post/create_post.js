import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state = {
            context: [],
            error: ""
        };
    }

    render () {
        return (
        <h2> THis is CreatePost page</h2>
        );
    }
}

export default withRouter(CreatePost)