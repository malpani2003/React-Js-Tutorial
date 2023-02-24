import React, { Component } from 'react'
import axios from 'axios'
// import React from 'react'


class AxiosHttp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            errpr:[]
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // console.log(response.data);
                this.setState({ post: response.data });
            })
            .catch((err) => {
                console.log(err.message);
                this.setState({ errpr:err.message});

            })
    }
    render() {
        const post = this.state.post;
        // console.log(post);

        return (
            
            <div>
                <h2>List of Post using axios</h2>
                <table>{post.length ? post.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.userId}</td>
                        <td>{data.title}</td>
                    </tr>
                )
            }) : <h3>{this.state.errpr}</h3>}</table></div>
        )
    }
}

export default AxiosHttp