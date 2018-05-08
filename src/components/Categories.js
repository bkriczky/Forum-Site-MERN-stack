import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import CreatePost from 'CreatePost';
import Posts from 'Posts';
import {keyBy,mapKeys, forOwn} from 'lodash';

// clear current database.
// create default categories that include a post key.
// create a function that creates a list for every post in the post array.
// on submit, send current posts array with the data. ie id, name, and posts.


class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: null,
            showComponent: false,

    
        };
        this.renderLists = ::this.renderLists;
        this._onMouseClick = this._onMouseClick.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount(state){
        axios.get('/category/get-categories')
        .then((response) => {
            this.setState({category: response.data.categories});
        })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    componentDidMount(){
        console.log(this.state);
    }
    _onChange(event){
        console.log(event.target);
    }

     _onMouseClick() {
        this.setState({
          showComponent: true,
        });
      }

    /* renderPost(posts){
        //under first input have this:
        {this.renderPosts(category.posts)}

        return(
        <ul>
        {posts.map(post, index) => {
            return <li id={index} key={index}>{post}</li>
        }}
        </ul>
        )
    } */


/*document.getElementById({category._id}).addEventListener('submit', performPostRequest);
function performPostRequest(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';
  
  axios.post('/post/c', {
    userId: '1',
    body: '',
    completed: false
  })
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
  
  e.preventDefault();
}*/





    renderLists(categories){
        if(categories == null) return <div/>;
        return (<ul>
        {categories.map((category)=> {

            return <li id={category._id}

            className="categories" key={category._id}>{category.name}

            {/*https://rohan-paul.github.io/%0A2017-08-21-react-component-passing-props-to-children.md/javascript/2017/08/22/Passing_Props_between_React_Components/*/}
            
            <Posts categ={category._id}/>

            <div>
                <form method="post" action="/post/create-posts">
                    <label>
                        Add a comment:
                        <input  type="text" name="body" onChange={this._onChange}/>
                    </label>
                    <input type="hidden" name="cat" value={category._id}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div>
               
            </div>

            </li>


        }) 
        }
        </ul>)
    }

    render() {
       

        return(
            <div>
            <main className='categories'>
            {this.renderLists(this.state.category)}
            </main>
            </div>

        )
    }
}



export default Categories;
