import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { commonStylesChat } from '../assets/constant/constant';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserDetail from './UserDetail';
import { useSelector } from 'react-redux';
import { reduxState } from '../assets/constant/interface';

const Homepage = () => {
  const UserSession = useSelector((state: reduxState) => (state.session));
  return (
    <>
      {(UserSession.status === 1 ?
        <UserDetail />
        : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="md" sx={{ ...commonStylesChat, borderRadius: '16px' }}>
              <Typography variant="h4" align="center" style={{ marginTop: '2rem' }}>
                Welcome to Chat Application
              </Typography>
              <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
                Start chatting with your friends and colleagues!
              </Typography>
              <Link to='/signin' style={{ textDecoration: 'none', color: '#fff' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{ marginTop: '2rem' }}
                >
                  Sign In
                </Button>
              </Link>
              <Link to='/signup' style={{ textDecoration: 'none', color: '#1565C0' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{ marginTop: '1rem' }}
                >
                  Sign Up
                </Button>
              </Link>
            </Container>
          </Box>
        ))}
    </>
  )
}

export default Homepage
