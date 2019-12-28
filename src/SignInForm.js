import React from 'react';
import {reduxForm,Field} from 'redux-form';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = val => {
    const errors = {};
    if (!val.firstName) {
      errors.firstName = 'Required';
    }
    if (!val.lastName) {
      errors.lastName = 'Required';
    }
    if (!val.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(val.email)) {
      errors.email = 'Invalid email address';
    }
    if (!val.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(val.age))) {
      errors.age = 'Must be a number'
    } else if (Number(val.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    if (!val.acceptTerms) {
      errors.acceptTerms = 'Please accept terms and conditions';
    }
    return errors;
  };
  
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )

  const renderCheckboxField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} type={type} />
      <label className="control-label">{label}</label>
      <br />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )

let SignInForm = props => {
    const { handleSubmit } = props;
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="well well-sm">
                <form onSubmit={handleSubmit} className="form-horizontal">
                <fieldset>
                  
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="firstName">First Name</label>
                    <div className="col-md-9">
                    <Field className="form-control" name="firstName" 
                     component={renderField} type="text" placeholder="First Name"/>
                    </div>
                  </div>
          
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="lastName">Last Name</label>
                    <div className="col-md-9">
                    <Field className="form-control" name="lastName" 
                     component={renderField} type="text" placeholder="Last Name"/>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="email">Email Address</label>
                    <div className="col-md-9">
                    <Field className="form-control" name="email" 
                     component={renderField} type="email" placeholder="Email Address"/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="age">Age</label>
                    <div className="col-md-9">
                    <Field className="form-control" name="age" 
                     component={renderField} type="number" placeholder="Age"/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="proficiency">Proficiency</label>
                    <div className="col-md-9">
                    <Field className="form-control" name="proficiency" component="select">
                      <option />
                      <option value="beginner">Beginner Dev</option>
                      <option value="intermediate">Intermediate Dev</option>
                      <option value="expert">Expert Dev</option>
                     </Field>
                    </div>
                  </div>
          
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="gender">Gender</label>
                    <div className="col-md-9">
                      <Field name="gender" component="input" type="radio" value="male" /> Male
                      {' '}
                      <Field name="gender" component="input" type="radio" value="female" /> Female
                    </div>
                  </div>
                
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="message">Your message</label>
                    <div className="col-md-9">
                      <Field className="form-control" name="message" component="textarea" placeholder="Please enter your message here..." rows="5" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <Field name="acceptTerms" component={renderCheckboxField} type="checkbox" label="I accept terms and conditions" />
                    </div>
                  </div>
          
                  <div className="form-group">
                    <div className="col-md-12 text-right">
                      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                  </div>
                </fieldset>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
  };

SignInForm = reduxForm({
    form: 'signIn',
    validate
})(SignInForm);

export default SignInForm;