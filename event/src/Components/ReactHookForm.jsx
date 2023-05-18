import React from 'react'
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';

const ReactHookForm = () => {
    const validateAge = (value) => {
        const age = parseInt(value);
        if (isNaN(age)) {
            return "Please enter a valid age";
        }
        if (age < 18 || age > 120) {
            return "Age must be between 18 and 120";
        }
        return true;
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Form className='col-md-4 offset-4' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name:</Form.Label>
                    <input type='text' {...register("firstName", { required: 'Firstname is required', maxLength: { value: 20, message: 'Maximum length exceeded' } })} />
                    {errors.firstName && <div className='text-danger'>{errors.firstName.message}</div>}
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <input type='text' {...register("lastName", { required: 'Lastname is required', maxLength: { value: 20, message: 'Maximum length exceeded' } })} />
                    {errors.lastName && <div className='text-danger'>{errors.lastName.message}</div>}
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <input type='email'{...register("email", { required: 'Email is required', pattern: { value: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i, message: 'Invalid email address', } })} />
                    {errors.email ? (<div className="text-danger">{errors.email.message}</div>) : null}
                </Form.Group>
                <Form.Group controlId="age">
                    <Form.Label>Age:</Form.Label>
                    <input type="text" {...register("age", { required: 'Age is required', validate: validateAge})} />
                    {errors.age ? (<div className="text-danger">{errors.age.message}</div>) : null}
                </Form.Group>
                {/* <Form.Group controlId="dateOfBirth">
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control type="date" onChange={handleChange} />
                    {touched.dob && errors.dob ? (<div className="text-danger">{errors.dob}</div>) : null}
                </Form.Group> */}
                {/* <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={values.password} onChange={handleChange} />
                    {touched.password && errors.password ? (<div className="text-danger">{errors.password}</div>) : null}
                </Form.Group> */}
                {/* <Form.Group controlId="confirmpassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" value={values.confirmpassword} onChange={handleChange} />
                    {touched.confirmpassword && errors.confirmpassword ? (<div className="text-danger">{errors.confirmpassword}</div>) : null}
                </Form.Group> */}
                {/* <Form.Group controlId="gender">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Check label="Male" value="male" checked={values.gender === 'male'} name="gender" type="radio" id="inline-radio-1" onChange={handleChange} />
                    <Form.Check label="Female" value="female" checked={values.gender === 'female'} name="gender" type="radio" id="inline-radio-2" onChange={handleChange} />
                    <Form.Check label="Other" value="other" checked={values.gender === 'other'} name='gender' type="radio" id="inline-radio-3" onChange={handleChange} />
                    {touched.gender && errors.gender ? (<div className="text-danger">{errors.gender}</div>) : null}
                </Form.Group> */}
                {/* <Form.Group controlId="hobby">
                    <Form.Label>Hobby:</Form.Label>
                    <Form.Check label="Cricket" value="cricket" name="hobby" type="checkbox" id="inline-checkbox-1" onChange={handleChange} />
                    <Form.Check label="Football" value="football" name="hobby" type="checkbox" id="inline-checkbox-2" onChange={handleChange} />
                    <Form.Check label="Pool" value="pool" name="hobby" type="checkbox" id="inline-checkbox-3" onChange={handleChange} />
                    {touched.hobby && errors.hobby ? (<div className="text-danger">{errors.hobby}</div>) : null}
                </Form.Group> */}
                {/* <Form.Group>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control as="select" name='country' id='country' value={values.country}>
                        <option value="">Please select</option>
                        {this.state.country.map((country) => (
                            <option key={country.name} value={country.name}>{country.name}</option>
                        ))}
                    </Form.Control>
                    {touched.country && errors.country ? (<div className='text-danger'>{errors.country}</div>) : null}
                </Form.Group> */}
                <Button className='mt-3 mb-5' variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default ReactHookForm
