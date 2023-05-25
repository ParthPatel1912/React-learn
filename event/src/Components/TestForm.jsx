import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            age: '',
            dateOfBirth: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            hobby: '',
            profilePicture: null,
            city: '',
            country: []
        };

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
        setTimeout(() => {

            this.setState({ country: countriesList })
        }, 100);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        const file = event.target.files[0];
        this.setState({ profilePicture: file });
    }

    render() {
        const { firstName, lastName, address, age, dateOfBirth, email, password, confirmPassword, gender, hobby, country, city } = this.state;

        return (
            <>
                <div className='text-center'>
                    <ul>
                        {this.state.country.map((country, index) => (
                            <>
                                <li data-test-id={`country-list-${index}`} key={index}>{country.name}
                                    <li style={{ color: 'red' }}>
                                        <ul>
                                            {country.cities.map((city,indexes) => (
                                                <li data-test-id={`city-list-${indexes}`} key={city}>{city}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
                <Form data-test-id='form' className='col-md-4 offset-4' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" data-test-id='firstName' name="firstName" value={firstName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" data-test-id='lastName' name="lastName" value={lastName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control data-test-id='address' type="text" name="address" value={address} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age:</Form.Label>
                        <Form.Control data-test-id='age' type="number" name="age" value={age} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date of Birth:</Form.Label>
                        <Form.Control data-test-id='dateOfBirth' type="date" name="dateOfBirth" value={dateOfBirth} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control data-test-id='email' type="email" name="email" value={email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control data-test-id='password' type="password" name="password" value={password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control data-test-id='confirmPassword' type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gender:</Form.Label>
                        <Form.Control data-test-id='gender' as="select" name="gender" value={gender} onChange={this.handleChange}>
                            <option value="">Please select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Hobby:</Form.Label>
                        <Form.Control data-test-id='hobby' type="text" name="hobby" value={hobby} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Profile Picture:</Form.Label>
                        <Form.Control data-test-id='profilePicture' type="file" onChange={this.handleFileChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control data-test-id='country' as="select" name="country" value={country.name}>
                            <option value="">Please Select</option>
                            {this.state.country.map((country) => (
                                <option key={country.name} value={country.name}>{country.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>City:</Form.Label>
                        <Form.Control data-test-id='city' type="text" name="city" value={city} onChange={this.handleChange} />
                    </Form.Group>
                    <Button data-test-id='submit' variant="primary" type="submit">Submit</Button>
                </Form>
            </>
        );
    }
}

export default TestForm;
