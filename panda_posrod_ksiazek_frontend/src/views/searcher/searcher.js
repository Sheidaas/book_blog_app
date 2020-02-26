import React, {Component} from 'react'
import axios from 'axios'
import withRouter from 'react-router-dom/withRouter'
import {Button, Grid, Typography} from '@material-ui/core'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import DialogFormFilter from './components/dialog_form_filter/dialog_form_filter'
import SearchResults from './components/search_results/search_results'
import './searcher.sass'

class SearcherView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDialogFormOpen: false,
            search_result: [],
            filter: {
                title_keywords: '',
                sort_method: 'latest',
                tags: [],
                from_date: '',
                to_date: '',
            }
        }
    }

    componentDidMount() {
        this.getPostSearchResult(this.state.filter)
    }

    updateFilter = (dialog_filter) => {
        this.setState({filter: dialog_filter})
    };

    recoverFilter = () => {
        return this.state.filter
    };

    onToggleDialogForm = () => {
        this.setState({
            isDialogFormOpen: !this.state.isDialogFormOpen,
        })
    };

    getPostSearchResult = (dialog_filter) => {
        axios.post('http://127.0.0.1:8000/get_posts/', JSON.stringify(dialog_filter)).then(
            (response) => { this.setState({search_result: response.data})
            })
    };

    render() {
        return (
            <>
                <Header/>
                <Grid container id="searcher-div" justify="center">
                    <Grid items xs={12} id="filter">
                        <Typography variant="h4" id={"header"}> Wynik obecnego wyszukiwania </Typography>
                        <Button variant="outlined" onClick={() => this.onToggleDialogForm()}> Zmień filter </Button>
                        <DialogFormFilter
                            updateFilter={this.updateFilter}
                            recoverFilter={this.recoverFilter}
                            isOpen={this.state.isDialogFormOpen}
                            onClose={this.onToggleDialogForm}
                            getPostSearchResult={this.getPostSearchResult}
                        />
                    </Grid>
                    <Grid item xs={10} id="filter-results">
                        <SearchResults search_result={this.state.search_result}/>
                    </Grid>
                </Grid>
                <Footer/>

            </>
        );
    }
}

export default withRouter(SearcherView)