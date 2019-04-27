import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    constructor () {
        super();

        this.state = {
            'blogs': []
        };

        this.getAllBlogs = this.getAllBlogs.bind(this);
    }

    getAllBlogs() {
        var self = this;
        axios({
          method: "get",
          headers: {'Authorization': 'Bearer '+ localStorage.getItem("petrol_api_token")},
          url: 'http://localhost:8000/api/blogs'
        }).then(function (response) {
            if(response){
                self.setState({
                    'blogs' : response.data
                })
            }
        })
        .catch(function (error) {
          window.alert(error);
        });
      }

    render() {
        const data = this.state.blogs.map(item => <p key={item.id}>{item.title}</p>)
        return (
            <div>
                <div>Welcome Back!</div>
                <a onClick = { this.getAllBlogs }>Get all blogs</a>
                <div>
                    {data}
                </div>
            </div>
        )
    }
}

export default Blog;