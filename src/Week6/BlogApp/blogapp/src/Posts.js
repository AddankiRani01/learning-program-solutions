import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    // Manually define posts with simple custom messages
    this.state = {
      posts: [
        { id: 1, title: 'Post 1', body: 'This is the content of Post 1.' },
        { id: 2, title: 'Post 2', body: 'This is the content of Post 2.' },
        { id: 3, title: 'Post 3', body: 'This is the content of Post 3.' },
        { id: 4, title: 'Post 4', body: 'This is the content of Post 4.' },
        { id: 5, title: 'Post 5', body: 'This is the content of Post 5.' },
      ],
      hasError: false,
    };
  }

  // This method simulates post loading
  componentDidMount() {
    console.log("Posts loaded successfully.");
  }

  // Error handling
  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
    alert("Something went wrong while displaying posts.");
    this.setState({ hasError: true });
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h3 style={{ color: 'red' }}>Unable to load posts. Please try again later.</h3>;
    }

    return (
      <div>
        <h2>Latest Blog Posts</h2>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
