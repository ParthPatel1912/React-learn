import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { reduxState } from '../assets/constant/interface';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const UserSession = useSelector((state: reduxState) => (state.session));

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Whatsapp</Link>
            </Typography>
            {(UserSession.status === 1 ? (
              <Typography style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ marginRight: '8px' }}>{UserSession.userName[0]}</Avatar>
                  <Typography variant="h6" component="span" style={{ marginLeft: '10px' }}>
                    {UserSession.userName}
                  </Typography>
                </div>
              </Typography>
            ) : '')}
            {(UserSession.status === 1 ? (
              <Link to='/friend' style={{ textDecoration: 'none', color: '#fff' }}><Button color="inherit">User List</Button></Link>
            ) : '')}

            {(UserSession.status === 0 ? (
              <>
                <Link to='/signup' style={{ textDecoration: 'none', color: '#fff' }}><Button color="inherit">Sign Up</Button></Link>
                <Link to='/signin' style={{ textDecoration: 'none', color: '#fff' }}><Button color="inherit">Sign In</Button></Link>
              </>
            ) : '')}

            {(UserSession.status === 1 ? (
              <Logout />
            ) : '')}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar
