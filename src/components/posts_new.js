import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
  render() {
    //extracting values from this.props
    const { fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
        </div>

        <div className='form-group'>
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}/>
        </div>

        <div className='form-group'>
          <label>Content</label>
          <textarea type='text' className='form-control' {...content}/>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

//connect: first arg is mapStateToProps, second arg is mapDispatchToProps
//redux-form: first arg is form config, second arg is mapStateToProps
//third arg is mapDispatchToProps

//this injects into component props
//reduxForm acts like connect
export default reduxForm({
  form: 'PostsNewForm', //form name must be unique
  fields: ['title', 'categories', 'content']
}, null, {createPost})(PostsNew);
