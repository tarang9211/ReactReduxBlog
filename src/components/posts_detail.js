import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsDetail extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id); //params is from the url route
  }

  render() {
    return (
      <div>
        {this.props.params.id}
      </div>
    )
  };
}

export default connect(null, { fetchPost: fetchPost })(PostsDetail);
