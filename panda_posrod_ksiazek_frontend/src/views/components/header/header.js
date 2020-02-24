import React, { Component } from 'react'
import logoImage from './img/panda_camilla.png'
import { AppBar, Toolbar, IconButton, Typography, Grid, Drawer, List, ListItem, ListItemText, Divider, Link, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InstagramIcon from '@material-ui/icons/Instagram';
import './header.sass'
import { Container } from 'reactstrap'
import MenuForm from './components/menu_form'




class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuIcon: false
        }

        this.onMenuIconClicked = this.onMenuIconClicked.bind(this)
    }


    onMenuIconClicked () { 
        this.setState({
            menuIcon: !this.state.menuIcon,
        })
    }

    render () {
        return (
            <>
            <MenuDrawer is_open={this.state.menuIcon} onClick={this.onMenuIconClicked} is_user_authenticated={this.props.is_user_authenticated}/>
            <Grid items sm={12} id="header"> 
                <img src={logoImage} alt="logo"></img>
            </Grid>
                <AppBar position="sticky" id="navbar" alignItems="flex-end">
                    <Toolbar>
                        <Grid container justify="space-between" direction="row">
                            <Grid xs={6} container direction="row" justify="center" alignItems="center">

                                <IconButton edge="start" color="inherit" aria-label="menu"
                                onClick={this.onMenuIconClicked} size="medium">
                                    <MenuIcon />
                                </IconButton>  
                                <Typography variant="body"> Panda Pośród Ksiązek </Typography>

                            </Grid>
                        <Grid xs={6} container direction="row" justify="center">
                            <IconButton color="inherit" aria-label="instagram"
                            size="medium" >
                                <InstagramIcon className="iconButtons"/>
                            </IconButton>
                            <MenuForm />   
                        </Grid>
           

                        </Grid>
                    </Toolbar>
                </AppBar> 
            </>
        );
    }
}

class MenuDrawer extends Component {
    render () {
        const menu_for_user = this.render_menu_for_user()
        return (
            <>
                <Drawer open={this.props.is_open} onClose={this.props.onClick} PaperProps={{ className: 'paper-drawer' }}>
                <Container id="drawer">
                <Box component="h3" className="list-header">
                Panda Pośród Ksiązek
                </Box>
                    <List component="nav" aria-label="main link-list">
                        <ListItem>
                            <ListItemText primary="Spis treści" className="list-header"/>  
                        </ListItem>
                        <Link href="/" className="list-link-link">
                            <ListItem button>
                                    <ListItemText primary="Początek" className="list-link-text"/>
                            </ListItem>
                        </Link>  
                        <Link href="/searcher/">
                            <ListItem button>
                                <ListItemText primary="Przeglądaj posty" className="list-link-text"/>
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="main link-list">
                        <ListItem>
                            <ListItemText primary="Kategorie" className="list-header"/>
                        </ListItem>
                        <ListItem button className="listItem">
                            <ListItemText primary="Początek" />
                        </ListItem>
                        <ListItem button className="listItem">
                            <ListItemText primary="Początek" />
                        </ListItem>
                        <ListItem button className="listItem">
                            <ListItemText primary="Początek" />
                        </ListItem>
                    </List>

                    {menu_for_user}


                </Container>
                </Drawer>
            </>
        )
    }

    render_menu_for_user () {
        if(this.props.is_user_authenticated){
            return (
                <>
                <Divider />
                <List component="nav" aria-label="main link-list">
                    <ListItem button className="listItem">
                        <ListItemText primary="Narzędzia" />
                    </ListItem>
                    <ListItem button className="listItem">
                        <ListItemText primary="Wyloguj się" />
                    </ListItem>
                </List>
                </>
            )
        }
    }
}






export default Header