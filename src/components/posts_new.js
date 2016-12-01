import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
  render() {
    //extracting values from this.props
    const { fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
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

//this injects into component props
export default reduxForm({
  form: 'PostsNewForm', //form name must be unique
  fields: ['title', 'categories', 'content']
})(PostsNew);
