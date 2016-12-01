import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
  render() {
    //extracting values from this.props
    const { fields: {title, categories, content}, handleSubmit} = this.props;

    //handleSubmit is created by redux-form and submits the form
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
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

/*
validate method must return an errors object.
the properties of the errors object must correspond to the form fields
*/
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a username';
  }


  return errors;
}

//connect: first arg is mapStateToProps, second arg is mapDispatchToProps
//redux-form: first arg is form config, second arg is mapStateToProps
//third arg is mapDispatchToProps

//this injects into component props
//reduxForm acts like connect
export default reduxForm({
  form: 'PostsNewForm', //form name must be unique
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);
