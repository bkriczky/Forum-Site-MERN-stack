import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Categories from 'Categories';




class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
        this.renderLists = ::this.renderLists;
    }

    componentWillMount(state){
        axios.get('/post/get-posts')
        .then((response) => 

        {
            this.setState({post: response.data.posts
                          
                });

        })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    
    renderLists(posts, categ){

        if(posts == null) return <div/>;
        return (<ul>
        { posts.map((post)=> {
            if (post.cat == categ)
            {
                return <li className="posts" id={post.cat} key={post._id}>{post.body}</li>
            }
        }) }
        <li>bye</li></ul>)
    }


    render() {

        return(
            <div>
            <main className='posts'>
            {this.renderLists(this.state.post, this.props.categ)}
            </main>
            </div>

        )
    }
}

export default Posts;
