import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reduxState } from '../assets/constant/interface';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { commonStylesChat } from '../assets/constant/constant';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FriendRequest, UpdateFriendRequest } from '../redux/actions/RequestAction'
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChatDelete } from '../redux/actions/ChatAction';

const Userlist = () => {
  const [buttonText, setButtonText] = useState('');

  const navigate = useNavigate();
  const UserSession = useSelector((state: reduxState) => (state.session));
  const userData = useSelector((state: reduxState) => (state.user));
  const UserRequestData = useSelector((state: reduxState) => (state.request));
  const newuserData = userData.filter((item) => item.email !== UserSession.userEmail);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.black,
      fontWeight: 600
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const dispatch = useDispatch();

  const requestCountUser = UserRequestData.filter(item => ((item.to === UserSession.userEmail) && (item.status === 2)));
  const friendCountUser = UserRequestData.filter(item => ((item.from === UserSession.userEmail) && (item.status === 1)) || ((item.to === UserSession.userEmail) && (item.status === 1)));

  // dialog alert
  const [open, setOpen] = useState(false);
  const [to, setTo] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseClear = () => {
    dispatch(UpdateFriendRequest({ from: UserSession.userEmail, to: to, status: 0 }));
    dispatch(ChatDelete({ from: UserSession.userEmail, to: to }));
    setOpen(false);
  };

  // const generateRandomString = (length: number) => {
  //   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //   let result = '';
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   return result;
  // };
  return (
    <>
      <div>
        {(UserRequestData.length > 0 && requestCountUser?.length > 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="md" sx={{ ...commonStylesChat, borderRadius: '16px' }}>
              <Typography variant="h5" align="left" style={{ marginTop: '2rem' }}>
                Request List
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {UserRequestData.map((row, index) => (
                      ((row.toName === UserSession.userName) && (row.status === 2) ? (
                        <StyledTableRow key={index}>
                          <StyledTableCell scope="row">
                            {row.fromName}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                              sx={{ marginRight: '20px' }}
                              onMouseDown={event => event.stopPropagation()}
                              onClick={event => {
                                event.stopPropagation();
                                event.preventDefault();
                                dispatch(UpdateFriendRequest({ to: UserSession.userEmail, from: row.from, toName: UserSession.userName, fromName: row.fromName, status: 1 }));
                              }}
                            >
                              Accept
                            </Button>
                            <Button
                              size="small"
                              variant="contained"
                              color="error"
                              onMouseDown={event => event.stopPropagation()}
                              onClick={event => {
                                event.stopPropagation();
                                event.preventDefault();
                                dispatch(UpdateFriendRequest({ from: UserSession.userEmail, to: row.from, fromName: UserSession.userName, toName: row.fromName, status: 0 }));
                              }}
                            >
                              Cancel
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ) : null)
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
        ) : '')}
      </div>
      <div>
        {(UserSession.status === 1 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="md" sx={{ ...commonStylesChat, borderRadius: '16px' }}>
              <Typography variant="h5" align="left" style={{ marginTop: '2rem' }}>
                User List
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {newuserData.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {UserRequestData.map((item) => (
                            ((((item.from === row.email) && (item.to === UserSession.userEmail)) && (item.status === 1)) || (((item.to === row.email) && (item.from === UserSession.userEmail)) && (item.status === 1))) &&
                            <div>Friend</div>
                            // setTest('Friend')
                          ))}
                          {UserRequestData.map((item) => (
                            (((item.from === row.email) && (item.to === UserSession.userEmail)) && (item.status === 2)) &&
                            <div>Received request</div>
                            // setTest('Received request')
                          ))}
                          {UserRequestData.map((item) => (
                            (((item.to === row.email) && (item.from === UserSession.userEmail)) && (item.status === 2)) &&
                            <div>Already sent</div>
                            // setTest('Already sent')
                          ))}
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onMouseDown={event => event.stopPropagation()}
                            onClick={event => {
                              event.stopPropagation();
                              event.preventDefault();
                              dispatch(UpdateFriendRequest({ from: UserSession.userEmail, to: row.email, fromName: UserSession.userName, toName: row.name, status: 2 }));
                            }}
                          >
                            Request
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
        ) :
          <div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{ marginTop: '2rem' }}
                >
                  Home
                </Button>
              </Link>
            </Box>
          </div>
        )}
      </div>
      <div>
        {(UserRequestData.length > 0 && friendCountUser?.length > 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth="md" sx={{ ...commonStylesChat, borderRadius: '16px' }}>
              <Typography variant="h5" align="left" style={{ marginTop: '2rem' }}>
                Friend List
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {UserRequestData.map((row, index) => (
                      (((row.fromName === UserSession.userName) && (row.status === 1)) || ((row.toName === UserSession.userName) && (row.status === 1)) ? (
                        <StyledTableRow key={index}>
                          <StyledTableCell scope="row">
                            {row.toName === UserSession.userName ? (
                              <div>{row.fromName}</div>
                            ) : <div>{row.toName}</div>
                            }
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                              sx={{ marginRight: '20px' }}
                              onMouseDown={event => event.stopPropagation()}
                              onClick={event => {
                                event.stopPropagation();
                                event.preventDefault();
                                // const randomString = generateRandomString(10);
                                const email = row.to === UserSession.userEmail ? (
                                  row.from) : (row.to
                                )
                                const name = row.toName === UserSession.userName ? (
                                  row.fromName) : (row.toName
                                )
                                const encodedUserEmail = btoa(email);
                                const encodedName = btoa(name);
                                navigate(`/chat/${encodedUserEmail}/${encodedName}`);
                              }}
                            >
                              Chat
                            </Button>
                            <Button
                              size="small"
                              variant="contained"
                              color="error"
                              onMouseDown={event => event.stopPropagation()}
                              onClick={event => {
                                event.stopPropagation();
                                event.preventDefault();
                                // dispatch(UpdateFriendRequest({ from: UserSession.userEmail, to: row.to, fromName: UserSession.userName, toName: row.toName, status: 0 }));
                                if (row.to === UserSession.userEmail) {
                                  setTo(row.from);
                                } else {
                                  setTo(row.to);
                                }
                                handleClickOpen();
                              }}
                            >
                              Remove
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ) : null)
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
        ) : '')}
      </div >

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">
          {"Remove Friend"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Want to remove?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseClear} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Userlist
