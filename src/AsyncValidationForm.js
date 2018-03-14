import React from 'react';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from './asyncValidate';

const lettersOnly = value =>
  value && !/^[a-z]+$/gi.test(value) ?
  'Please enter only letters' : undefined

const required = value => value ? undefined : 'Required'

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined


const renderField = (
  { input, label, type, meta: { asyncValidating, touched, error } },
) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span className="err-msg">{error}</span>}
    </div>
  </div>
);

const AsyncValidationForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field name="firstname" type="text"
        component={renderField} label="First name"
        validate={[ required, lettersOnly ]}
      />
      <Field name="lastname" type="text"
        component={renderField} label="Last name"
        validate={[ required, lettersOnly ]}
      />
      <Field name="email" type="email"
        component={renderField} label="Email"
        validate={[required,email]}
      />
      <Field name="iban" type="text"
        component={renderField} label="IBAN"
        validate={[ required ]}
      />
      <div className="btn-wrap">
        <button type="submit" className="btn" disabled={submitting}>Sign Up</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'asyncValidation', // a unique identifier for this form
  asyncValidate,
  asyncBlurFields: ['iban'],
})(AsyncValidationForm);
