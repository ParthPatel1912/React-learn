import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { productRemove, productCartAdd, productCartSubtract } from '../redux/actions/ProductAction';
import { Item, MyAction, StateCart, PropsCart } from '../assets/constant/interface';

const mapStateToProps = (state: StateCart) => {
  return {
    cart: state.data
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<MyAction>) => {
  return {
    addQty: (id: number) => {
      return dispatch(productCartAdd(id))
    },
    subQty: (id: number) => {
      return dispatch(productCartSubtract(id))
    },
    removeProduct: (id: number) => {
      return dispatch(productRemove(id))
    }
  };
};
export class Cart extends Component<PropsCart> {
  constructor(props: PropsCart) {
    super(props);
  }

  render() {
    let amount = Math.round((this.props.cart.length && this.props.cart.map((item: Item) => (item.qty * item.price)).reduce((prev, next) => prev + next) * 100)) / 100;
    let discount = Math.round(((amount * 7) * 100) / 100) / 100;
    let tax = Math.round(((amount * 10) * 100) / 100) / 100;
    let total = Math.round((amount - discount + tax) * 100) / 100;
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            typography: 'body1',
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
            mt: 3,
            mb: 2
          }} >
          <Link to="/list" >Go to Back</Link>
        </Box>
        {
          this.props.cart.length > 0 ?
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: '600' }} align="center" colSpan={6}>
                      Details
                    </TableCell>
                    <TableCell style={{ fontWeight: '600' }} align="right">Price</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: '600' }}>Title</TableCell>
                    <TableCell style={{ fontWeight: '600' }}>Category</TableCell>
                    <TableCell style={{ fontWeight: '600' }}>Image</TableCell>
                    <TableCell style={{ fontWeight: '600' }} align="center">Qty.</TableCell>
                    <TableCell style={{ fontWeight: '600' }} align="right">Unit Price</TableCell>
                    <TableCell style={{ fontWeight: '600' }} align="right">Action</TableCell>
                    <TableCell style={{ fontWeight: '600' }} align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    this.props.cart.map((item: Item) =>
                      <TableRow key='new'>
                        <TableCell>{item.title.slice(0, 15)}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>
                          <CardMedia
                            sx={{ height: 75, width: 75 }}
                            image={item.image}
                            title={`${item.title}`} />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton data-test-id='subQty' onClick={() => this.props.subQty(item.id)} disabled={item.qty === 1 ? true : false} color="primary" aria-label="add to shopping cart">
                            <RemoveIcon />
                          </IconButton>
                          {item.qty}
                          <IconButton data-test-id='addQty' onClick={() => this.props.addQty(item.id)} color="primary" aria-label="add to shopping cart">
                            <AddIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined" data-test-id='removeItem' onClick={() => this.props.removeProduct(item.id)} color='error' startIcon={<DeleteIcon />}>
                            Delete
                          </Button>
                        </TableCell>
                        <TableCell align="right">{Math.round((item.price * item.qty) * 100) / 100}</TableCell>
                      </TableRow>
                    )}
                  <TableRow>
                    <TableCell rowSpan={4} colSpan={4} />
                    <TableCell style={{ fontWeight: '600' }} colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">{amount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: '600' }}>Discount</TableCell>
                    <TableCell align="right">7%</TableCell>
                    <TableCell align="right">{discount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: '600' }}>Tax</TableCell>
                    <TableCell align="right">10%</TableCell>
                    <TableCell align="right">{tax}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontWeight: '600' }} colSpan={2}>Total</TableCell>
                    <TableCell align="right">{total}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            :
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: 6
              }} >
              <Typography height={'60px'} variant="h5" component="div">
                Cart is Empty
              </Typography>
            </Box>
        }
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);