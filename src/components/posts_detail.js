import React, {Component} from 'react';

class PostsDetail extends Component {
  render() {
    return (
      <div>
        {this.props.params.id}
      </div>
    )
  };
}

export default PostsDetail
