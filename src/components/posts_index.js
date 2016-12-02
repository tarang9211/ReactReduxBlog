import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, deletePost} from '../actions/index';
import {Link} from 'react-router';

//this class is a **container**
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  handleDelete(id) {
    this.props.deletePost(id)
      .then(() => {
        this.props.fetchPosts();
      })
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className='list-group-item padding-bottom' key={post.id}>
          <button className='btn btn-danger pull-xs-right' onClick={this.handleDelete.bind(this, post.id)}>Delete</button>
          <Link to={'/posts/' + post.id}>
            <span className='pull-xs-right margin-right'>{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>Add a post!</Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
//fetchPosts action is available as this.props.fetchPosts
export default connect(mapStateToProps, {
  fetchPosts: fetchPosts,
  deletePost: deletePost
})(PostsIndex);
