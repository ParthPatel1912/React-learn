import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';
import { productList, productAdd, productRemove } from '../redux/actions/ProductAction'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const mapStateToProps = (state: any) => {
  return {
    data: state.product,
    cart: state.data
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    productList: () => {
      return dispatch(productList())
    },
    addProduct: (item: any) => {
      return dispatch(productAdd(item))
    },
    removeProduct: (id: number) => {
      return dispatch(productRemove(id))
    }
  };
};

interface Props {
  productList: any;
  addProduct: any;
  removeProduct: any;
  data: [];
  cart: [];
}

export class List extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state = { expanded: false, filterData: [] };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  componentDidMount() {
    this.props.productList();
    const newData = this.props.data.map((item: any) => {
      return {
        ...item,
        qty: 1
      }
    })
    this.setState({ filterData: newData })
  }

  componentDidUpdate(prevProps: Props, prevState: any): void {
    if (this.props.data.length !== prevProps.data.length) {
      const newData = this.props.data.map((item: any) => {
        return {
          ...item,
          qty: 1
        }
      })
      this.setState({ filterData: newData })
    }
  }

  render() {
    const searchData = (e: any) => {
      const search = e.target.value.toLowerCase();
      const modifiedData = this.props.data.filter((item: any) => item.title.toLowerCase().includes(search) || item.price.toString().includes(search))
      this.setState({ filterData: modifiedData })
    }
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
            mt: 2,
            mb: 2
          }} >
          <Link style={{ marginTop: '10px' }} to="/cart" >Go to Cart</Link>
          <Link to="/cart">
            <IconButton href='cart' aria-label="cart">
              <StyledBadge badgeContent={this.props.cart.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="search" onChange={(e) => searchData(e)} label="Search Product" variant="outlined" />
        </Box>
        <Grid container spacing={2} mb={3} justifyContent="flex-start">
          {
            this.state.filterData.map((item: any) =>
              <Grid container key={item.id} xs={3} mt={2} item >
                <Card sx={{ maxWidth: 330 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography height={'60px'} gutterBottom variant="h5" component="div">
                      {item.title.slice(0, 40)}
                    </Typography>
                    <Typography style={{ height: '150px' }} gutterBottom variant="body2" color="text.secondary">
                      {item.description.slice(0, 250)}
                    </Typography>
                    <Typography fontWeight={300} component="div">
                      Price :
                      <Typography component="span"> {item.price} </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" onClick={() => this.props.addProduct(item)} startIcon={<AddShoppingCartOutlinedIcon />}>
                      Add to Cart
                    </Button>
                    <Button variant="outlined" onClick={() => this.props.removeProduct(item.id)} color='error' startIcon={<DeleteIcon />}>
                      Remove Product
                    </Button>
                    <ExpandMore
                      expand={this.state.expanded}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="show more" >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography gutterBottom fontWeight={600} component="div">
                        Category :
                        <Typography gutterBottom component="span"> {item.category} </Typography>
                      </Typography>
                      <Typography gutterBottom fontWeight={600} component="div">
                        Rate :
                        <Typography gutterBottom component="span"> {item.rating.rate} </Typography>
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            )}
        </Grid>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);