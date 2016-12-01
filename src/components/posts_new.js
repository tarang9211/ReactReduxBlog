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

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}/>
          <div className='text-help'>
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type='text' className='form-control' {...content}/>
          <div className='text-help'>
            {content.touched ? content.error : ''}
          </div>
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

  if (!values.categories) {
    errors.categories = 'Please enter some categories';
  }

  if (!values.content) {
    errors.content = 'Please enter content';
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
