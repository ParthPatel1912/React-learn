import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    firstname: "",
    email: "",
    age: "",
    dob: "",
    password: "",
    confirmpassword: ""
};

const schema = yup.object().shape({
    firstname: yup
        .string()
        .min(2, 'Too short')
        .trim()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    age: yup
        .number()
        .required(),
    // dob: yup
    //     .date()
    //     .required(),
    password: yup
        .string()
        .required()
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confirmpassword: yup
        .string()
        .required()
        // .when("password", {
        //     is: password => (password && password.length > 0 ? true : false),
        //     then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
        // })
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});


// const validate = (values) => {
//     let errors = {};

//     if (!values.firstname.trim()) {
//         errors.firstname = "Firstname is required";
//     }

//     if (!values.email) {
//         errors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
//         errors.email = "Invalid Email";
//     }
//     return errors;
// }

const submitForm = (values) => {
    console.log(values);
};

export class YupForm extends Component {
    constructor() {
        super();

        const countriesList = [
            {
                name: 'United States',
                cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia']
            },
            {
                name: 'Canada',
                cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa']
            },
            {
                name: 'United Kingdom',
                cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Glasgow']
            },
            {
                name: 'Australia',
                cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
            }
        ];
        this.state = { country: countriesList };
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitForm}>

                    {/* {(formik) => ( */}
                    {({ values, handleChange, handleSubmit, errors, touched, handleBlur, dirty, isValid }) => (
                        <Form data-test-id='form' className='col-md-4 offset-4' onSubmit={handleSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" data-test-id='firstname' name='firstname' value={values.firstname} onChange={handleChange} />
                                {touched.firstname && errors.firstname ? (<div className='text-danger'>{errors.firstname}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" value={values.email} onChange={handleChange} />
                                {touched.email && errors.email ? (<div className="text-danger">{errors.email}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="text" value={values.age} onChange={handleChange} />
                                {touched.age && errors.age ? (<div className="text-danger">{errors.age}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="dateOfBirth">
                                <Form.Label>Date of Birth:</Form.Label>
                                <Form.Control type="date" onChange={handleChange} />
                                {touched.dob && errors.dob ? (<div className="text-danger">{errors.dob}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" value={values.password} onChange={handleChange} />
                                {touched.password && errors.password ? (<div className="text-danger">{errors.password}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="confirmpassword">
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control type="password" value={values.confirmpassword} onChange={handleChange} />
                                {touched.confirmpassword && errors.confirmpassword ? (<div className="text-danger">{errors.confirmpassword}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender:</Form.Label>
                                <Form.Check label="Male" value="male" checked={values.gender === 'male'} name="gender" type="radio" id="inline-radio-1" onChange={handleChange} />
                                <Form.Check label="Female" value="female" checked={values.gender === 'female'} name="gender" type="radio" id="inline-radio-2" onChange={handleChange} />
                                <Form.Check label="Other" value="other" checked={values.gender === 'other'} name='gender' type="radio" id="inline-radio-3" onChange={handleChange} />
                                {touched.gender && errors.gender ? (<div className="text-danger">{errors.gender}</div>) : null}
                            </Form.Group>
                            <Form.Group controlId="hobby">
                                <Form.Label>Hobby:</Form.Label>
                                <Form.Check label="Cricket" value="cricket" name="hobby" type="checkbox" id="inline-checkbox-1" onChange={handleChange} />
                                <Form.Check label="Football" value="football" name="hobby" type="checkbox" id="inline-checkbox-2" onChange={handleChange} />
                                <Form.Check label="Pool" value="pool" name="hobby" type="checkbox" id="inline-checkbox-3" onChange={handleChange} />
                                {touched.hobby && errors.hobby ? (<div className="text-danger">{errors.hobby}</div>) : null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Country:</Form.Label>
                                <Form.Control as="select" name='country' id='country' value={values.country}>
                                    <option value="">Please select</option>
                                    {this.state.country.map((country) => (
                                        <option key={country.name} value={country.name}>{country.name}</option>
                                    ))}
                                </Form.Control>
                                {touched.country && errors.country ? (<div className='text-danger'>{errors.country}</div>) : null}
                            </Form.Group>
                            <Button className='mt-3 mb-5' variant="primary" type="submit">Submit</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default YupForm