import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';

export default class Router extends Component {
    state = {
        posts : []
    }
    componentDidMount(){
        this.obtenerPost();
    }

    obtenerPost = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                posts: res.data
            });
        })
    }

  render() {
    return (
        <BrowserRouter>
            <div className='container'>
                <div className='row justify-content-center'>
                    <Header />
                </div>
                <div className='row justify-content-center'>
                    <Navegacion />
                </div>
            </div>
        </BrowserRouter>
      
    )
  }
}
