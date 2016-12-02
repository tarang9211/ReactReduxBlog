import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsDetail extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id); //params is from the url route
  }

  render() {
    const {post} = this.props
    if (!post) {
      return <div>Loading...</div> //loading spinner could go here
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>Content: {post.content}</p>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps, { fetchPost: fetchPost })(PostsDetail);
