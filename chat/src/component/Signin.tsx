import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import { commonStylesSign } from '../assets/constant/constant';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { UserSignin, UserState, reduxState } from '../assets/constant/interface';
import { useState } from 'react';
import { UserSession } from '../redux/actions/SessionAction'

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: reduxState) => (state.user));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(0);
  const [Errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const closeAlert = () => {
    setAlert(0);
  }

  const validateForm = () => {
    let isValid = true;
    const errors: UserSignin['errors'] = {
      email: '',
      password: ''
    };
    if (!email.trim()) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      isValid = false;
      errors.email = 'Invalid email format';
    }
    if (!password.trim()) {
      isValid = false;
      errors.password = 'Password is required';
    } else if (password.length < 1) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters long';
    }
    setErrors(errors);
    return isValid;
  }

  const validateEmail = (email: string) => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateForm();
    const userFound = userData.filter((item: UserState) => item.email === email && item.password === password);
    if (error === true) {
      if (userFound.length === 1) {
        setEmail('');
        setPassword('');
        setAlert(0);
        dispatch(UserSession({ status: 1, email, name: userFound[0].name }));
        navigate("/friend");
      } else {
        setEmail('');
        setPassword('');
        setAlert(1);
      }
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth="sm" sx={{ ...commonStylesSign, borderRadius: '16px' }}>
        {alert === 1 ?
          <Alert
            startDecorator={<WarningIcon sx={{ mx: 0.5 }} />}
            variant="soft"
            color="danger"
            sx={{ marginTop: '20px' }}
            endDecorator={
              <React.Fragment>
                <IconButton onClick={closeAlert} variant="soft" size="sm" color="danger">
                  <CloseIcon />
                </IconButton>
              </React.Fragment>
            }
          >
            <Typography color="danger" fontWeight="md">
              User not found, Please try again....
            </Typography>
          </Alert>
          : ''}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          {Errors.email && <p className="text-danger">{Errors.email}</p>}

          <TextField
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
          />
          {Errors.password && <p className="text-danger">{Errors.password}</p>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default Signin
