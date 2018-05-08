import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';


class CreateCategory extends Component {

    render() {
        return(
      <form method="post" action="/category/create-category">
  		  <label>
    	  Create New Category:
    	  <input type="text" name="name" />
  		  </label>
  		  <input type="submit" value="Submit" />
		  </form>
        )
    }
}

export default CreateCategory;