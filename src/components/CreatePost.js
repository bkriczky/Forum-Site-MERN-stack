import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';



class CreatePost extends Component {

   render() {
        return(
      <form method="post" action="/post/create-post">
        <label>
        Create New Post
        <input type="text" name="body" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        )
    }
}

export default CreatePost;