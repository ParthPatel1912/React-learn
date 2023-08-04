import React, { useState } from 'react'
import { Avatar, Button, TextField, Typography, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { reduxState } from '../assets/constant/interface';
import { UserNameUpdate, UserPasswordUpdate } from '../redux/actions/UserAction'
import { UserSession } from '../redux/actions/SessionAction'
import { useNavigate } from "react-router-dom";
import { UserUpdateName, UserUpdatePassword, UserState } from '../assets/constant/interface';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';

const UserDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UserSessionData = useSelector((state: reduxState) => (state.session));
    const userData = useSelector((state: reduxState) => (state.user));

    const [name, setName] = useState(UserSessionData.userName);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showSuccessMessageName, setShowSuccessMessageName] = useState(false);
    const [alert, setAlert] = useState(0);

    const closeAlert = () => {
        setAlert(0);
    }

    // update name form
    const [Errors, setErrors] = useState({
        updateName: '',
    });

    const handleNameChange = (e: any) => {
        setName(e.target.value);
    };

    const validateForm = () => {
        let isValid = true;
        const errors: UserUpdateName['errors'] = {
            updateName: '',
        };
        if (!name.trim()) {
            isValid = false;
            errors.updateName = 'Name is required';
        }
        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validateForm();
        if (error === true) {
            handleChangeName();
        }
    }

    const handleChangeName = () => {
        setShowSuccessMessageName(true);
        dispatch(UserNameUpdate({ email: UserSessionData.userEmail, name: UserSessionData.userName, updatedName: name }));
        dispatch(UserSession({ status: 1, email: UserSessionData.userEmail, name }));
        setTimeout(() => {
            setShowSuccessMessageName(false);
        }, 3000);
    };

    // update password form
    const [Error, setError] = useState({
        oldPassword: '',
        newUpdatePassword: '',
        newConfirmPassword: ''
    });

    const handleCurrentPasswordChange = (e: any) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e: any) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: any) => {
        setConfirmPassword(e.target.value);
    };

    const validatePasswordForm = () => {
        let isValid = true;
        const error: UserUpdatePassword['errors'] = {
            oldPassword: '',
            newUpdatePassword: '',
            newConfirmPassword: ''
        };
        if (!currentPassword.trim()) {
            isValid = false;
            error.oldPassword = 'Current Password is required';
        } else if (currentPassword.length < 6) {
            isValid = false;
            error.oldPassword = 'Current Password must be at least 6 characters long';
        }
        if (!newPassword.trim()) {
            isValid = false;
            error.newUpdatePassword = 'New Password is required';
        } else if (newPassword.length < 6) {
            isValid = false;
            error.newUpdatePassword = 'New Password must be at least 6 characters long';
        }
        if (newPassword !== confirmPassword) {
            isValid = false;
            error.newConfirmPassword = 'Passwords do not match';
        }
        setError(error);
        return isValid;
    }

    const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validatePasswordForm();
        const userFound = userData.filter((item: UserState) => (item.email === UserSessionData.userEmail && item.password === currentPassword));
        console.log("file: UserDetail.tsx:114 ~ handlePasswordSubmit ~ userFound:", userFound)
        if (error === true) {
            if (userFound.length === 1) {
                handleChangePassword();
            } else {
                setAlert(1);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        }
    }

    const handleChangePassword = () => {
        setAlert(0);
        setShowSuccessMessage(true);
        dispatch(UserPasswordUpdate({ email: UserSessionData.userEmail, password: currentPassword, updatedPassword: newPassword }));
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
            dispatch(UserSession({ status: 0, email: '', name: '' }));
            navigate("/");
        }, 5000);
    };
    return (
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            {(UserSessionData.status === 1 ? (
                <>
                    <Typography variant="h4" align="left" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        Update Profile
                    </Typography>
                    <hr />
                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left', padding: '20px', justifyContent: 'center' }}>
                        <Avatar />
                        <div style={{ marginLeft: '10px' }}>
                            <Typography variant="h6">{UserSessionData.userName}</Typography>
                            <Typography variant="body1">{UserSessionData.userEmail}</Typography>
                        </div>
                    </div>

                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid item xs={3} md={3}>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        label="New Name"
                                        variant="outlined"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                    {Errors.updateName && <p className="text-danger">{Errors.updateName}</p>}
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <Button type='submit' variant="contained" color="primary" sx={{ margin: '20px 20px' }}>
                                        Change Name
                                    </Button>
                                    {showSuccessMessageName && <Typography variant="body1">Name changed successfully.</Typography>}
                                </form>
                            </div>
                        </Grid>

                        <Grid item xs={3} md={3}>
                            <div>
                                <form onSubmit={handlePasswordSubmit}>
                                    <TextField
                                        label="Current Password"
                                        variant="outlined"
                                        type="password"
                                        value={currentPassword}
                                        onChange={handleCurrentPasswordChange}
                                    />
                                    {Error.oldPassword && <p className="text-danger">{Error.oldPassword}</p>}
                                    <br />
                                    <TextField
                                        label="New Password"
                                        variant="outlined"
                                        type="password"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                        sx={{ marginTop: '20px' }}
                                    />
                                    {Error.newUpdatePassword && <p className="text-danger">{Error.newUpdatePassword}</p>}
                                    <br />
                                    <TextField
                                        label="Confirm Password"
                                        variant="outlined"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        sx={{ marginTop: '20px' }}
                                    />
                                    {Error.newConfirmPassword && <p className="text-danger">{Error.newConfirmPassword}</p>}
                                    <br />
                                    <Button type='submit' variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                                        Change Password
                                    </Button>
                                    {showSuccessMessage && <Typography variant="body1">Password changed successfully. Please login again....</Typography>}
                                </form>
                            </div>
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
                                        Current password not matcing
                                    </Typography>
                                </Alert>
                                : ''}
                        </Grid>
                    </Grid>
                </>
            ) : null)}
        </div>
    )
}

export default UserDetail
