import React, { Component } from 'react'
import { Dialog, DialogTitle, Grid, withStyles, Button } from '@material-ui/core'
import _Input from '../../../components/_input/_input'
import _RADIO from './_select/_select'
import TagSelector from './tag_selector/tag_selector'
import './dialog_form_filter.sass'

const styles = {
    paper: {
        backgroundColor: '#E8ABAD !important',
        color: 'white !important',
    }
    
};

class DialogFormFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                title_keywords: '',
                sort_method: 'latest',
                tags: [],
                from_date: '',
                to_date: '',
            }
        }
    }

    onChangeTitleKeywords = ( event ) => {
        this.setState({ filter: {
            title_keywords: event.target.value,
            sort_method: this.state.filter.sort_method,
            tags: this.state.filter.tags,
            from_date: this.state.filter.from_date,
            to_date: this.state.filter.to_date,
        }})
    };

    onChangeSortMethod = ( event ) => {
        this.setState({ filter: {
            title_keywords: this.state.filter.title_keywords,
            sort_method: event.target.value,
            tags: this.state.filter.tags,
            from_date: this.state.filter.from_date,
            to_date: this.state.filter.to_date,
        }})
    };

    onChangeTagsList = (name) => {
        let tags = this.state.filter.tags;
        let index = tags.indexOf(name);
        if (index > -1) {
            tags.splice(index, 1)
        }else{
            tags.push(name)
        }
        this.setState({ filter: {
            title_keywords: this.state.filter.title_keywords,
            sort_method: this.state.filter.sort_method,
            tags: tags,
            from_date: this.state.filter.from_date,
            to_date: this.state.filter.to_date,
        }});
        console.log(this.state.filter)
    };

    getFactorySettings = () => {
        return {
            title_keywords: '',
            sort_method: 'latest',
            tags: [],
            from_date: '',
            to_date: '',
        }
    };

    render () {
        const { classes } = this.props;
        return (
            <>
            <Dialog 
            open={this.props.isOpen} 
            onClose={this.props.onClose} 
            id="dialog-form-filter"
            classes={classes}>
                <Grid container id="dialog-container" justify="center">

                    <Grid item xs={12} className="input-block">
                        <DialogTitle > Filter dla wyszukiwarki </DialogTitle>
                    </Grid>

                    <Grid item xs={12} className="input-block">
                        <_Input 
                        id="input-with-icon-grid"
                        name="title_keywords" 
                        placeholder="Tytuł"
                        value={this.state.filter.title_keywords}
                        label="Tytuł"
                        onChange={this.onChangeTitleKeywords}
                        />
                    </Grid>

                    <Grid item xs={12} className="input-block">
                        <_RADIO 
                            sort_method={this.state.filter.sort_method}
                            onChange={this.onChangeSortMethod}
                            />
                    </Grid>
                    
                    <Grid item xs={12} className="input-block">
                        <TagSelector selected_chips={this.state.filter.tags} onTagChipClick={this.onChangeTagsList}/>
                    </Grid>

                    <Grid item xs={12} className="input-block">
                        <Button onClick={ () => {
                            this.props.onClose();
                            this.props.updateFilter(this.state.filter);
                            this.props.getPostSearchResult(this.state.filter)
                            }}> Nowe wyszukiwanie </Button>
                        <Button onClick={ () => {
                            this.props.onClose();
                            this.setState({filter: this.props.recoverFilter()})
                        }}> Cofnij </Button>
                        <Button onClick={ () => {
                            const factory_settings = this.getFactorySettings();
                            this.props.onClose();
                            this.setState({filter: factory_settings});
                            this.props.updateFilter(factory_settings);
                            this.props.getPostSearchResult(factory_settings)}
                        }> Wyczyść filter </Button>
                    </Grid>

                </Grid>

            </Dialog>
            </>
        );
    }

}

export default withStyles(styles)(DialogFormFilter)