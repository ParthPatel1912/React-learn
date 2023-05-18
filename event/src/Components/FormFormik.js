import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

function FormFormik() {
    const [country, setCountry] = useState('');

    // List of countries and their respective cities
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

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        // Reset city when country changes
        // setCity('');
        formik.setFieldValue('country', event.target.value);
        formik.handleChange(event);
    }

    // const handleCityChange = (event) => {
    //     setCity(event.target.value);
    // }

    const validate = values => {
        const errors = {};

        if (!values.firstName.trim()) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName.trim()) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email.trim()) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid emial address';
        }

        if (!values.age.trim()) {
            errors.age = 'Required';
        } else if (!/^[0-9]*$/.test(values.age.trim())) {
            errors.age = 'Age must be in number';
        } else if (!/^[0-9]{1,3}$/.test(values.age.trim())) {
            errors.age = 'Age contain only 3 digit';
        }

        // if (!values.dob) {
        //     console.log("file: FormFormik.js:80 ~ validate ~ values.dob:", values.dob)
        //     errors.dob = 'Required';
        // }

        if (!values.address.trim()) {
            errors.address = 'Required';
        } else if (values.address.length > 100) {
            errors.address = 'Must be 100 characters or less';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be 8 character or more';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            .test(values.password)) {
            errors.password = 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one numerical digit, and one special character';
        }

        if (!values.confirmpassword) {
            errors.confirmpassword = 'Required';
        } else if (values.password !== values.confirmpassword) {
            errors.confirmpassword = 'Passwords do not match';
        }

        if (!values.gender) {
            errors.gender = 'Please select a gender';
        }

        if (!values.hobby || values.hobby.length === 0) {
            errors.hobby = 'Please select atleast one hobby';
        }

        if (!values.profilePicture) {
            errors.profilePicture = 'Please select profile picture';
        } else if (values.profilePicture.type !== 'image/jpeg' && values.profilePicture.type !== 'image/png') {
            errors.profilePicture = 'Please select a JPEG or PNG file';
        } else if (values.profilePicture.size > 1048576) {
            errors.profilePicture = 'File size must be less than 1 MB';
        }

        if (!values.country) {
            errors.country = 'Please select country';
        }

        if (!values.city) {
            errors.city = 'Please select city';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            // dob: '',
            address: '',
            password: '',
            confirmpassword: '',
            gender: '',
            hobby: [],
            profilePicture: null,
            country: '',
            city: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify({...values, profilePicture: formik.values.profilePicture.name}, null, 1));
            console.log(values);
        },
    });

    return (
        <Form className='col-md-4 offset-4' onSubmit={formik.handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" value={formik.values.firstName} onChange={formik.handleChange} />
                {formik.touched.firstName && formik.errors.firstName ? (<div className="text-danger">{formik.errors.firstName}</div>) : null}
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" value={formik.values.lastName} onChange={(formik.handleChange)} />
                {formik.touched.lastName && formik.errors.lastName ? (<div className="text-danger">{formik.errors.lastName}</div>) : null}
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? (<div className="text-danger">{formik.errors.email}</div>) : null}
            </Form.Group>
            <Form.Group controlId="age">
                <Form.Label>Age:</Form.Label>
                <Form.Control type="text" value={formik.values.age} onChange={formik.handleChange} />
                {formik.touched.age && formik.errors.age ? (<div className="text-danger">{formik.errors.age}</div>) : null}
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control type="date" value={formik.values.dob} onChange={formik.handleChange} />
                {formik.touched.dob && formik.errors.dob ? (<div className="text-danger">{formik.errors.dob}</div>) : null}
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label>Address:</Form.Label>
                <Form.Control as="textarea" value={formik.values.address} onChange={formik.handleChange} />
                {formik.touched.address && formik.errors.address ? (<div className="text-danger">{formik.errors.address}</div>) : null}
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.touched.password && formik.errors.password ? (<div className="text-danger">{formik.errors.password}</div>) : null}
            </Form.Group>
            <Form.Group controlId="confirmpassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" value={formik.values.confirmpassword} onChange={formik.handleChange} />
                {formik.touched.confirmpassword && formik.errors.confirmpassword ? (<div className="text-danger">{formik.errors.confirmpassword}</div>) : null}
            </Form.Group>
            <Form.Group controlId="gender">
                <Form.Label>Gender:</Form.Label>
                {/* <Form.Control as="select" value={gender} onChange={(event) => setGender(event.target.value)}>
                    <option value="">Please select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Form.Control> */}
                <Form.Check label="Male" value="male" checked={formik.values.gender === 'male'} name="gender" type="radio" id="inline-radio-1" onChange={formik.handleChange} />
                <Form.Check label="Female" value="female" checked={formik.values.gender === 'female'} name="gender" type="radio" id="inline-radio-2" onChange={formik.handleChange} />
                <Form.Check label="Other" value="other" checked={formik.values.gender === 'other'} name='gender' type="radio" id="inline-radio-3" onChange={formik.handleChange} />
                {formik.touched.gender && formik.errors.gender ? (<div className="text-danger">{formik.errors.gender}</div>) : null}
            </Form.Group>
            <Form.Group controlId="hobby">
                <Form.Label>Hobby:</Form.Label>
                {/* <Form.Control type="text" value={hobby} onChange={(event) => setHobby(event.target.value)} /> */}
                <Form.Check label="Cricket" value="cricket" checked={formik.values.hobby.includes('cricket')} name="hobby" type="checkbox" id="inline-checkbox-1" onChange={formik.handleChange} />
                <Form.Check label="Football" value="football" checked={formik.values.hobby.includes('football')} name="hobby" type="checkbox" id="inline-checkbox-2" onChange={formik.handleChange} />
                <Form.Check label="Pool" value="pool" checked={formik.values.hobby.includes('pool')} name="hobby" type="checkbox" id="inline-checkbox-3" onChange={formik.handleChange} />
                {formik.touched.hobby && formik.errors.hobby ? (<div className="text-danger">{formik.errors.hobby}</div>) : null}
            </Form.Group>
            <Form.Group controlId="profilePicture">
                <Form.Label>Profile Picture:</Form.Label>
                <Form.Control type="file" name="profilePicture" onChange={event => formik.setFieldValue('profilePicture', event.currentTarget.files[0])} />
                {formik.touched.profilePicture && formik.errors.profilePicture ? (<div className='text-danger'>{formik.errors.profilePicture}</div>) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>Country:</Form.Label>
                <Form.Control as="select" name='country' id='country' value={formik.values.country} onChange={handleCountryChange}>
                    <option value="">Please select</option>
                    {countriesList.map((country) => (
                        <option key={country.name} value={country.name}>{country.name}</option>
                    ))}
                </Form.Control>
                {formik.touched.country && formik.errors.country ? (<div className='text-danger'>{formik.errors.country}</div>) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>City:</Form.Label>
                <Form.Control as="select" name='city' id='city' value={formik.values.city} onChange={formik.handleChange} disabled={!country}>
                    <option value="">Please select</option>
                    {country && countriesList.find((c) => c.name === country).cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </Form.Control>
                {formik.touched.city && formik.errors.city ? (<div className='text-danger'>{formik.errors.city}</div>) : null}
            </Form.Group>
            <Button className='mt-3 mb-5' variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default FormFormik