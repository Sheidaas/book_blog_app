import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from "../components/footer/footer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import _Input from "../components/_input/_input";
import './login.sass'

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login_form: {
                username: '',
                password: '',
            }
        };
    }

    onLoginButtonClick = () => {
        let form = new FormData();
        form.append('username', this.state.login_form.username);
        form.append('password', this.state.login_form.password);
        axios.post('', form).then( (response) => {
            if (response.data) {
                console.log(response.data)
            }
        }).catch( (error) => {
            switch (error.) {

            }
        })
    };

    render = () => {
        return (
            <>
                <Header is_user_authenticated={false}/>
                <Grid container justify={"center"} className={'login-block'}>
                    <Grid item xs={6} className={'login-form'}>
                        <Grid className={'login-form-body'}>
                            <Typography variant={"h4"}> Logowanie </Typography>
                            <Grid xs={12}>
                                <div className={'login-form-input'}>
                                    <_Input
                                        label={'Nazwa użytkownika'}
                                        value={this.state.login_form.username}
                                        name={'username'}/>
                                </div>
                            </Grid>
                            <Grid xs={12} className={'login-form-input'}>
                                <_Input
                                    label={'Hasło'}
                                    value={this.state.login_form.password}
                                    name={'password'}/>
                            </Grid>
                            <Grid xs={12} className={'login-form-input'}>
                                <Button
                                    onClick={ () => this.onLoginButtonClick() }
                                    variant={"text"}> Zaloguj się </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Footer/>
            </>
        );
    }
}

export default withRouter(LoginView)