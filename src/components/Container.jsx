import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Categories from 'Categories';
import CreateCategory from 'CreateCategory';
import Posts from 'Posts';
import CreatePost from 'CreatePost';


class Container extends Component {

    render() {
        return(
            <div>
            <main className='container'>
            <h2>Welcome to the Forum! Click on a category or create your own</h2>
            <Categories/>
            <Posts/>
            <CreateCategory/>
           
            
            </main>
            </div>
        )
    }
}

export default Container;