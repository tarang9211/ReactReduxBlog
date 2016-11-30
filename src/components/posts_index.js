import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

//this class is a **container**
class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Lists of blog posts
      </div>
    );
  }
}

//fetchPosts action is available as this.props.fetchPosts
export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
