import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserSignup, UserState, reduxState } from '../assets/constant/interface';
import { useState } from 'react';
import { commonStylesSign } from '../assets/constant/constant';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { UserAdd } from '../redux/actions/UserAction'
import { useNavigate } from "react-router-dom";
import '../assets/css/style.css'

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: reduxState) => (state.user));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState(0);
  const [Errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const closeAlert = () => {
    setAlert(0);
  }

  const validateForm = () => {
    let isValid = true;
    const errors: UserSignup['errors'] = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    if (!name.trim()) {
      isValid = false;
      errors.name = 'Name is required';
    }
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
    } else if (password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters long';
    }
    if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Passwords do not match';
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
    const userFound = userData.filter((item: UserState) => item.email === email);
    if (error === true) {
      if (userFound.length === 0) {
        dispatch(UserAdd({name,email,password}));
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAlert(0);
        navigate("/signin");
      } else {
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
              This email already registered
            </Typography>
          </Alert>
          : ''}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          {Errors.name && <p className="text-danger">{Errors.name}</p>}

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

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
          />
          {Errors.confirmPassword && <p className="text-danger">{Errors.confirmPassword}</p>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default Signup