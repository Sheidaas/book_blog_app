import React, { Component } from 'react';
import axios from 'axios';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FileUploader from "../components/FileUploader/FileUploader";
import { withRouter } from 'react-router-dom';
import './PostCreator.sass';
import Grid from '@material-ui/core/Grid';
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import _Input from "../components/_input/_input";
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorHandler from "./error_handler/ErrorHandler"

class PostCreator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            hero_image: null,
            image_alt: '',
            description: '',
            title: '',
            context: '',
            committed: true,
            tags: [],
            all_tags: []
        }
    }

    componentDidMount() {
    axios.get('http://127.0.0.1:8000/get_tags/').then(
        (response) => {
            this.setState({
                errors: this.state.errors,
                hero_image: this.state.hero_image,
                image_alt: this.state.image_alt,
                description: this.state.description,
                title: this.state.title,
                context: this.state.context,
                committed: this.state.committed,
                tags: this.state.tags,
                all_tags: response.data.map( tag => {return tag.name})
            });
        });
    };

    handleTagChange = (event) => {
        this.setState( {
            errors: this.state.errors,
            hero_image: this.state.hero_image,
            image_alt: this.state.image_alt,
            description: this.state.description,
            title: this.state.title,
            context: this.state.context,
            committed: this.state.committed,
            tags: event.target.value,
            all_tags: this.state.all_tags
        });
    };

    handleHeroImageChange = (event) => {
        this.setState({
            hero_image: event.target.files[0],
            image_alt: this.state.image_alt,
            description: this.state.description,
            title: this.state.title,
            context: this.state.context,
            committed: this.state.committed,
            tags: this.state.tags,
            all_tags: this.state.all_tags,
        })
    };

    handleImageAltChange = (event) => {
        this.setState(        {
            errors: this.state.errors,
            hero_image: this.state.hero_image,
            image_alt: event.target.value,
            description: this.state.description,
            title: this.state.title,
            context: this.state.context,
            committed: this.state.committed,
            tags: this.state.tags,
            all_tags: this.state.all_tags,
        })
    };

    handleCardDescriptionChange = (event) => {
        this.setState(        {
            errors: this.state.errors,
            hero_image: this.state.hero_image,
            image_alt: this.state.image_alt,
            description: event.target.value,
            title: this.state.title,
            context: this.state.context,
            committed: this.state.committed,
            tags: this.state.tags,
            all_tags: this.state.all_tags,
        })
    };

    handleTitleChange = (event) => {
        this.setState(        {
            errors: this.state.errors,
            hero_image: this.state.hero_image,
            image_alt: this.state.image_alt,
            description: this.state.description,
            title: event.target.value,
            context: this.state.context,
            committed: this.state.committed,
            tags: this.state.tags,
            all_tags: this.state.all_tags,
        })
    };

    handleCommittedChange = () => {
        this.setState(        {
            errors: this.state.errors,
            hero_image: this.state.hero_image,
            image_alt: this.state.image_alt,
            description: this.state.description,
            title: this.state.title,
            context: this.state.context,
            committed: !this.state.committed,
            tags: this.state.tags,
            all_tags: this.state.all_tags,

        })
    };

    handleContextChange = (event) => {
        this.setState(        {
            errors: this.state.errors,
            hero_image: this.state.hero_image,
            image_alt: this.state.image_alt,
            description: this.state.description,
            title: this.state.title,
            context: event.target.value,
            committed: this.state.committed,
            tags: this.state.tags,
            all_tags: this.state.all_tags,
        })
    };

    submitForm = () => {
        let data = new FormData();
        data.append('hero_image', this.state.hero_image);
        data.append('image_alt', this.state.image_alt);
        data.append('description', this.state.description);
        data.append('title', this.state.title);
        data.append('context', this.state.context);
        data.append('commited', this.state.committed);
        data.append('tags', this.state.tags);
        axios.post('http://127.0.0.1:8000/create_post/', data).then(
            (response) => {
                this.setState(        {
                    errors: null,
                    hero_image: this.state.hero_image,
                    image_alt: this.state.image_alt,
                    description: this.state.description,
                    title: this.state.title,
                    context: this.state.context,
                    committed: this.state.committed,
                    tags: this.state.tags,
                    all_tags: this.state.all_tags,
                });
            }
        ).catch( (error) =>{
            if(error.response.status === 400){
                this.setState(        {
                    errors: error.response.data.errors,
                    hero_image: this.state.hero_image,
                    image_alt: this.state.image_alt,
                    description: this.state.description,
                    title: this.state.title,
                    context: this.state.context,
                    committed: this.state.committed,
                    tags: this.state.tags,
                    all_tags: this.state.all_tags,
                });
            }

        })
    };

    render = () => {
        let errors = null;
        if(this.state.errors != null){
            errors = <ErrorHandler errors={this.state.errors} />
        }
        return (
            <>
                <Header />
                    <Grid container justify={'center'}>
                        <Grid item xs={10}>
                            <Grid item xs={12} className={'CardConf'}>
                                <Grid className={'free-space'} />
                                <FileUploader
                                    onChange={this.handleHeroImageChange}
                                    file={this.state.hero_image}/>
                                <Grid className={'free-space'} />
                                <Grid item xs={12}>
                                    <_Input
                                    name={'Image alt'}
                                    placeholder={'Opis zdjęcia'}
                                    value={this.state.image_alt}
                                    label={'Opis zdjęcia'}
                                    onChange={this.handleImageAltChange}/>
                                </Grid>
                                <Grid className={'free-space'} />
                                <Grid item xs={12}>
                                    <_Input
                                        name={'Description'}
                                        placeholder={'Opis postu'}
                                        value={this.state.description}
                                        label={'Opis postu'}
                                        onChange={this.handleCardDescriptionChange}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className={'PostConf'}>
                                <Grid className={'free-space'} />
                                <Grid item xs={12}>
                                    <_Input
                                        name={'Title'}
                                        error={`${'title' in this.state.errors} `}
                                        placeholder={'Tytuł posta'}
                                        value={this.state.title}
                                        label={'Tytuł posta'}
                                        onChange={this.handleTitleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid className={'free-space'} />
                                    <Grid item xs={12}>
                                        <Typography variant={'h6'} id={'content-header'}> Treść posta </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <textarea
                                        id={'content-textarea'}
                                        onChange={ (event) => this.handleContextChange(event) }>
                                    </textarea>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12}>
                                    <Grid className={'free-space'} />
                                    <Grid item xs={12}>
                                        <Typography variant={'h6'} id={'content-header'}> Tagi </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl>
                                            <Select
                                                multiple
                                                name={'tags'}
                                                value={this.state.tags}
                                                onChange={this.handleTagChange}
                                                renderValue={ selected => selected.join(', ')}>
                                                {this.state.all_tags.map( (tag) => (
                                                    <MenuItem key={tag} value={tag}>
                                                        <Checkbox checked={ this.state.tags.indexOf(tag) > -1 } />
                                                        <ListItemText primary={tag} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </Grid>

                                </Grid>
                                <Grid item xs={12}>
                                    Opublikować?
                                    <Switch
                                        checked={this.state.committed}
                                        onClick={() => this.handleCommittedChange()}
                                        color={'secondary'}
                                        name={'committed'}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant={"primary"} onClick={this.submitForm}> Wyślij post </Button>
                                </Grid>
                                <Grid className={'free-space'} />
                            </Grid>
                            <Grid item xs={12} className={'ErrorsConf'}>
                                {errors}
                            </Grid>
                            <Grid className={'free-space'} />
                        </Grid>
                    </Grid>
                <Footer />
            </>
        )
    }
}

export default withRouter(PostCreator)