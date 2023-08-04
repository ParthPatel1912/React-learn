import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { ChatAction } from '../redux/actions/ChatAction'
import { useDispatch, useSelector } from 'react-redux';
import { reduxState } from '../assets/constant/interface';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChatDelete } from '../redux/actions/ChatAction';
import { UpdateFriendRequest } from '../redux/actions/RequestAction';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Chat = () => {
    const [message, setMessage] = React.useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chatData = useSelector((state: reduxState) => (state.chat));
    const UserSession = useSelector((state: reduxState) => (state.session));
    const { encodeChatId, encodeChatUserName } = useParams();
    const chatId = atob(encodeChatId ?? '');
    const chatUserName = atob(encodeChatUserName ?? '');
    const date = new Date();
    const showTime = date.getDate().toString().padStart(2, '0')
        + '-' + (date.getMonth() + 1).toString().padStart(2, '0')
        + '-' + date.getFullYear().toString()
        + ' ' + date.getHours().toString().padStart(2, '0')
        + ':' + date.getMinutes().toString().padStart(2, '0')
        + ":" + date.getSeconds().toString().padStart(2, '0');

    const handleSendMessage = () => {
        dispatch(ChatAction({ from: UserSession.userEmail, to: chatId, time: showTime, message }));
        setMessage('');
    };

    // menu event
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Handle click event to open the menu
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle close event to close the menu
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDelete = () => {
        dispatch(ChatDelete({ from: UserSession.userEmail, to: chatId }));
        setAnchorEl(null);
    };
    const handleRemove = () => {
        dispatch(UpdateFriendRequest({ from: UserSession.userEmail, to: chatId, status: 0 }));
        dispatch(ChatDelete({ from: UserSession.userEmail, to: chatId }));
        setAnchorEl(null);
        navigate(`/friend`);
    };

    // dialog alert
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openRemove, setOpenRemove] = React.useState(false);

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
        handleClose();
    };

    const handleClickOpenRemove = () => {
        setOpenRemove(true);
        handleClose();
    };

    const handleCloseDialog = () => {
        setOpenDelete(false);
        setOpenRemove(false);
        handleClose();
    };

    const handleCloseClearDelete = () => {
        handleDelete();
        setOpenDelete(false);
    };

    const handleCloseClearRemove = () => {
        handleRemove();
        setOpenRemove(false);
    };

    const TimeConverter = (timeString: any) => {
        const time = new Date(timeString);
        const dateParts = timeString.split(" ");
        const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

        return <span>{`${dateParts[0]} ${formattedTime}`}</span>;
    };
    return (
        <div>
            {(UserSession.status === 1 ? (
                <>
                    <AppBar sx={{ backgroundColor: 'white', color: 'black' }} position="sticky">
                        <Toolbar sx={{ marginLeft: '80px', marginRight: '130px' }}>
                            <ArrowBackIcon sx={{marginRight: '20px', cursor: 'pointer'}} onClick={() => navigate(-1)} />
                            <Avatar>
                                <PersonIcon />
                            </Avatar>

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
                                {chatUserName}
                            </Typography>

                            <IconButton onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClickOpenDelete}>Delete Chat</MenuItem>
                                <MenuItem onClick={handleClickOpenRemove}>Remove Friend</MenuItem>
                            </Menu>
                        </Toolbar>
                    </AppBar>

                    <Box sx={{ padding: '16px', overflowY: 'auto', height: 'calc(100vh - 237px)', margin: '0px  150px' }}>
                        {chatData.map((message, index) => (
                            (((message.from === UserSession.userEmail && message.to === chatId) || (message.to === UserSession.userEmail && message.from === chatId)) &&
                                <Box key={index} sx={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: ((message.to === UserSession.userEmail) ? 'start' : 'end') }}>
                                    <Avatar sx={{ marginRight: '8px' }}>{(message.from === UserSession.userEmail) ? (
                                        UserSession.userName[0]
                                    ) : (chatUserName?.charAt(0))}</Avatar>
                                    <Typography variant="body1">
                                        <b>{((message.to === UserSession.userEmail) ? (chatUserName) : (UserSession.userName))}</b>: {message.message}
                                    </Typography>
                                    <Typography sx={{ margin: '25px 0px 0px 10px' }} variant="caption" color="textSecondary">
                                        {TimeConverter(message.time)}
                                    </Typography>
                                </Box>)
                        ))}
                    </Box>

                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', margin: '0px 100px' }}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <IconButton type='submit' color="primary" onClick={handleSendMessage}>
                            <SendIcon />
                        </IconButton>
                    </form>
                </>
            ) : null)};

            <Dialog
                open={openDelete}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Chat"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Want to Delete Chat?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleCloseClearDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openRemove}
                onClose={handleCloseDialog}
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
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleCloseClearRemove} autoFocus>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Chat
