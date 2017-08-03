import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label className="control-label">{field.label}</label>
        <input className="form-control" type="text" {...field.input} />

        {touched && <span className="text-help ">{error}</span>}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>PostNew</h3>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" label="Post Title" component={this.renderField}/>
          <Field name="categories" label="Post Categories" component={this.renderField}/>
          <Field name="content" label="Post Content" component={this.renderField}/>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Enter a categories'
  }

  if (!values.content) {
    errors.content = 'Enter a content'
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostNew);
