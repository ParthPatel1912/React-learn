import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { UserSession } from '../redux/actions/SessionAction'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const LogoutClick = () => {
        dispatch(UserSession({ status: 0, email: '', name: '' }));
        navigate("/");
    }
    return (
        <Button variant="contained" color="primary" onClick={LogoutClick}>
            Logout
        </Button>
    )
}

export default Logout
