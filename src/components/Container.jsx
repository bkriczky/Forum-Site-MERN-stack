import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postMessage: null
        }
        this.renderLists = ::this.renderLists;
    }

    componentWillMount(state){
               axios.get('/post/get-post-by-thread?threadId=5aac2b54d21a5b1ad41bbca1')
                     .then((response) => {
                        console.log(response);
                        this.setState({postMessage: response.data.posts});
                     })
                     .catch(function (error) {
                        console.log(error);
                    });
    }

    componentDidMount(){

    }

    renderLists(posts){
        console.log(posts);
        if(posts == null) return <div/>;
        return (<ul>
        { posts.map((post)=> {
            return <li key={post.threadId}>{post.body}</li>
        }) }
        </ul>)
    }

    render() {

        return(
            <main className='container'>
            <h1>BRIAN</h1>
            THIS IS MY FIRST PAGEEEEeeeeeeeee222288888!
            {this.renderLists(this.state.postMessage)}
            </main>
        )
    }
}


/* <BrowserRouter>
    <article className='wt-views'>
                            <Switch>
                             <Route path="/:id" component={Views}/>
                             <Route exact path="/" component={StartPartial}/>
                            </Switch>
              </article>
        </BrowserRouter>
*/
export default Container;