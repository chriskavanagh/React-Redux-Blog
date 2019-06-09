import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PostForm from "./PostForm";
//import axios from "axios";

class Posts extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  } */

  /* async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts: data });
  } */

  componentDidMount() {
    this.props.fetchPosts();
  }

  static getDerivedStateFromProps(props) {
    if (props) {
      return props.posts.unshift(props.newPost);
    } else return props;
  }

  // deprecated
  /* componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.props.posts.unshift(nextProps.newPost);
    }
  } */

  render() {
    //const { posts } = this.state;
    const { posts } = this.props;
    const postItems = posts.map(p => (
      <div key={p.id}>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
      </div>
    ));
    return (
      <div>
        <PostForm />
        <h1 className="postHeader">Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
