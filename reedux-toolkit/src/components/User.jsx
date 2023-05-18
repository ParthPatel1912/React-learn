import { React, useState, useMemo } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { userData } from '../api';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser, clearUsers } from '../store/slices/UserSlices';
import TablePagination from '@mui/material/TablePagination';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const User = () => {
    const dispatch = useDispatch();
    const addNewUser = (payload) => {
        dispatch(addUser(payload));
    }

    const deleteUserData = (payload) => {
        dispatch(removeUser(payload));
    }

    const clearUser = () => {
        dispatch(clearUsers());
    }

    const list = useSelector((state) => state.users);

    // pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = useMemo(
        () =>
            list.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [list, page, rowsPerPage]);

    // dialog alert
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseClear = () => {
        clearUser();
        setOpen(false);
    };

    return (
        <>
            <div className='text-center'>
                <Typography sx={{ mt: '20px', textAlign: "center" }} variant="h3" gutterBottom>
                    User List
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        mt: '20px',
                        textAlign: "center"
                    }}
                    noValidate
                    autoComplete="off">
                    <Fab sx={{ mt: '8px' }} color="primary" aria-label="add" onClick={() => addNewUser(userData())} >
                        <AddIcon />
                    </Fab>
                </Box>
                {(list.length !== 0) &&
                    <Box sx={{ width: '50%', margin: 'auto', textAlign: "center" }}>
                        <TableContainer component={Paper}>
                            <Table sx={{
                                minWidth: 650
                            }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Task Details</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{
                                    "& .MuiTableRow-root:hover": {
                                        backgroundColor: "primary.light",
                                    },
                                    ".MuiTableCell-root:hover": {
                                        color: "white !important",
                                    }
                                }}>
                                    {
                                        (visibleRows.map((row, id) =>
                                            <TableRow
                                                key={row.number}
                                                sx={{ '&th, td': { border: 2 } }}
                                            >
                                                <TableCell scope="row">{row}</TableCell>
                                                <TableCell align="right">
                                                    <Fab color="error" aria-label="delete" onClick={() => deleteUserData({ row, id })} >
                                                        <DeleteIcon />
                                                    </Fab>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={list.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        <Button sx={{ mt: '20px' }} variant="outlined" startIcon={<DeleteIcon />} onClick={handleClickOpen} >
                            Delete All
                        </Button>
                    </Box>
                }
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description" >
                    <DialogTitle id="alert-dialog-title">
                        {"Delete User"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Want to Delete?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleCloseClear} autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default User
