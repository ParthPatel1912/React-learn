import React, { useEffect, useState, useMemo } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddTodo, DeleteTodo, ClearTodo, EditTodo, UpdateTodo } from '../actions/Index';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [hour, setHour] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list);
    console.log("file: Todo.jsx:28 ~ Todo ~ list:", list)
    const data = useSelector((state) => state.todoReducer.data);
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        data.length !== 0 ? setTodo(data[0].data) : setTodo('');
    }, [data])

    useEffect(() => {
        setFilterData(list);
    }, [list])

    const searchData = (e) => {
        const search = e.target.value;
        const modifiedData = list.filter((item) => item.data.includes(search))
        setFilterData(modifiedData);
    }

    const visibleRows = useMemo(
        () =>
            filterData.slice(
                page * 5,
                page * 5 + 5
            ),
        [filterData, page]);

    const handleChangePageNew = (event, newPage) => {
        setPage(newPage - 1);
        console.log("file: Todo.jsx:46 ~ handleChangePageNew ~ newPage:", newPage)
    };

    // dialog alert
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseClear = () => {
        dispatch(ClearTodo());
        setOpen(false);
    };

    return (
        <>
            <div className='text-center'>
                <Typography sx={{ mt: '20px' }} variant="h3" gutterBottom>
                    To-do List
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        mt: '20px'
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField
                        id="outlined-password-input"
                        label="Task"
                        autoComplete="current-password"
                        placeholder='Add Task'
                        value={todo}
                        error={error}
                        helperText={error && 'Incorrect entry.'}
                        onChange={(e) => (e.target.value !== '' ? (setTodo(e.target.value), setError(false)) : (setTodo(''), setError(true)))} />

                    {data.length !== 0 ?
                        <Fab sx={{ mt: '8px' }} color="primary" aria-label="add" onClick={() => (todo.trim() !== '') ? dispatch(UpdateTodo(data[0].id, todo), setTodo(''), setError(false)) : setError(true)}>
                            <EditNoteIcon />
                        </Fab>
                        :
                        <Fab sx={{ mt: '8px' }} color="primary" aria-label="add" onClick={() => (todo.trim() !== '') ? dispatch(AddTodo(todo), setTodo(''), setError(false)) : setError(true)}>
                            <AddIcon />
                        </Fab>}
                </Box>

                {(list.length !== 0) ?
                    <Box sx={{ width: '50%', margin: 'auto' }}>
                        <TextField
                            sx={{ mr: '50px' }}
                            id="outlined-password-input"
                            label="Search"
                            autoComplete="current-password"
                            placeholder='Search'
                            onChange={(e) => searchData(e)} />
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
                                    {visibleRows.map((row, id) => (
                                        <TableRow
                                            key={id}
                                            sx={{ '&th, td': { border: 2 } }}
                                        >
                                            <TableCell scope="row">{row.data}</TableCell>
                                            <TableCell align="right">
                                                <Fab color='warning' sx={{ mr: "10px" }} aria-label="delete" onClick={() => dispatch(EditTodo(row.id), setError(false))}>
                                                    <EditIcon />
                                                </Fab>
                                                <Fab color="error" aria-label="delete" onClick={() => dispatch(DeleteTodo(row.id))}>
                                                    <DeleteIcon />
                                                </Fab>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ mt: '20px', justifyContent: "center" }}>
                            <Pagination count={Math.ceil(filterData.length / 5)} variant="outlined" color="primary" defaultPage={1} onChange={handleChangePageNew} />
                        </Box>

                        <Button sx={{ mt: '20px' }} variant="outlined" onClick={handleClickOpen} startIcon={<DeleteIcon />}>
                            Delete All
                        </Button>
                    </Box>
                    : ''}
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

export default Todo 