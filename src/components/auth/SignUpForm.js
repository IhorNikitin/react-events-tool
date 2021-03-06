import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';

import ErrorField from '../common/ErrorField';

class SignUpForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className='signUp'>
                <h3>Sing Up</h3>
                <form onSubmit={handleSubmit}>
                    <Field name='email' component={ErrorField} />
                    <Field name='pass' component={ErrorField} type='password' />
                    <div className='field'>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = ({ email, pass }) => {
    const errors = {};

    if (!email) errors.email = 'this field must be filled out';
    else if (!emailValidator.validate(email)) errors.email = 'incorrect email format';

    if (!pass) errors.pass = 'this field must be filled out';
    else if (pass.length < 5) errors.pass = 'password is to short';

    return errors;
};

export default reduxForm({
    form: 'auth',
    validate,
})(SignUpForm);
