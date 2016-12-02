import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id); //params is from the url route
  }

  handlePostDelete() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      })
  }

  render() {
    const {post} = this.props
    if (!post) {
      return <div>Loading...</div> //loading spinner could go here
    }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.handlePostDelete.bind(this)}>
          Delete
        </button>
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

export default connect(mapStateToProps, {
  fetchPost: fetchPost,
  deletePost: deletePost
})(PostsDetail);
