import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header from './views/components/header/header'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import IndexView from './views/index/index'
import LoginView from './views/login/login'
import SearcherView from './views/searcher/searcher'
import PostDetailView from './views/post_detail/post_detail'
import SavedPostList from './views/saved_post_list/saved_post_list'
import CreatePost from './views/create_post/create_post'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

const elementRouters = document.getElementById('routers')
const routers = (
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={IndexView} />
        <Route path='/login' component={LoginView} />
        <Route path='/searcher' component={SearcherView} />
        <Route path='/admin/blog/post/create' component={CreatePost} />
        <Route path='/admin/blog/saved_posts' component={SavedPostList} />
        <Route path="/articles/:slug" component={PostDetailView} />
    </Switch>
    </BrowserRouter>
)
ReactDOM.render(routers, elementRouters)
