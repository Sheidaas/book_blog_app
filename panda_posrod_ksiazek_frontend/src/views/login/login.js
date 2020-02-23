import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            context: [],
            error: ""
        };
    }

    render () {
        return (
        <h2> THis is login page</h2>
        );
    }
}

export default withRouter(LoginView)