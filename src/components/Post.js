import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post: []
    }
    async componentDidMount(){
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        this.setState({post:data})
    }

  render() {
    return (
      <div>
          <h1>Publicaciones desde Api de Jsonplaceholder</h1>
          {
              this.state.post.map(post => {
                  return <div key={post.id}>
                      <h2>{post.id} - {post.title}</h2>
                      {post.body}
                  </div>
              })
          }
      </div>
    )
  }
}

