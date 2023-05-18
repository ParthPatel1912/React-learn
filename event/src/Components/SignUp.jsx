import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated") || false);
    const [testuser, settestuser] = useState(localStorage.getItem("testuser") || '');
    const users = [{ username: "jane@jane", password: "test" }];
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate();
        console.log("file: SignUp.jsx:19 ~ handleSubmit ~ errors:", errors)
        if (Object.keys(errors).length === 0) {
            const account = users.find((user) => user.username === username);
            if (account && account.password === password) {
                setauthenticated(true)
                localStorage.setItem("authenticated", true);
                localStorage.setItem("testuser", username);
                navigate("/dashboard");
            } else {
                errors.finalcheck = "User doesn't exist";
                setErrors(errors);
            }
        } else {
            setErrors(errors);
        }
    };

    const validate = () => {
        const errors = {};
        if(!username) {
            errors.username = 'Username is require';
        }
        if(!password) {
            errors.password = 'Password is require';
        }
        return errors;
    }
    return (
        <div className='col-md-6 offset-3'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setusername(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    {errors.username ? <p className='text-danger'>{errors.username}</p> : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                    {errors.password ? <p className='text-danger'>{errors.password}</p> : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                    {errors.finalcheck ? <p className='text-danger'>{errors.finalcheck}</p> : null}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp

