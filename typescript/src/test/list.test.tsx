import React from 'react';
// import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import { reducer } from '../redux/reducers';
// import productSaga from '../redux/saga/productSaga';
import { List, ExpandMore, mapDispatchToProps } from '../components/List';
// import IconButton from '@mui/material/IconButton';

// // Create a mock Saga middleware
// const sagaMiddleware = createSagaMiddleware();

// // Create a mock Redux store with the reducer and Saga middleware
// const store = configureStore({
//     reducer: reducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(sagaMiddleware),
// });

// // Run the saga middleware
// sagaMiddleware.run(productSaga);

const Props = {
    productList: jest.fn(),
    addProduct: jest.fn(),
    removeProduct: jest.fn(),
    data: [],
    cart: []
}

const filterData = [{
    category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}]

const initialData = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
];

const newData = [
    {
        category: "men's clothing",
        description: "discription",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        qty: 1
    },
    {
        category: "men's clothing",
        description: "discription",
        id: 2,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        qty: 1
    },
    {
        category: "men's clothing",
        description: "discription",
        id: 3,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        qty: 1
    },
];

const addProduct = {
    category: "men's clothing",
    description: "discription",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    qty: 1
}

const checkAddProduct = {
    type: 'PRODUCT_ADD',
    payload: addProduct
}

const checkRemoveProduct = {
    type: 'PRODUCT_REMOVE',
    payload: 3
}

let wrapper: ShallowWrapper;
beforeEach(() => {
    wrapper = shallow(
        // <Provider store={store}>
        <List {...Props} data={initialData} />
        // </Provider>
    );
});

describe('Test case for List Component', () => {
    it('Search input field', () => {
        const input = wrapper.find({ 'data-test-id': 'search' });
        input.simulate('change', { target: { value: 'Test' } });
    })

    it('Button add product', () => {
        wrapper.setState({ filterData: filterData })
        const input = wrapper.find({ 'data-test-id': 'addCart' });
        input.simulate('click');
        expect(input).toBeTruthy();
    })

    it('Button remove product', () => {
        wrapper.setState({ filterData: filterData })
        const input = wrapper.find({ 'data-test-id': 'removeCart' });
        input.simulate('click');
        expect(input).toBeTruthy()
    })

    it('expand', () => {
        wrapper.setState({ filterData: filterData })
        const input = wrapper.find({ 'data-test-id': 'ExpandMoreIcon' });
        input.simulate('click');
        expect(input).toBeTruthy()
    });

    it('data set didMount didUpdate', () => {
        wrapper.setProps({ data: newData });
        expect(wrapper.state('filterData')).toEqual(newData);
    });

    it('should render IconButton with correct props', () => {
        const wrapper = shallow(<ExpandMore expand={true} />);
    });

    it('should return the correct action creators', () => {
        // @ts-ignore
        const actionCreators = mapDispatchToProps();
        expect(actionCreators.productList).toBeDefined();
        expect(actionCreators.addProduct).toBeDefined();
        expect(actionCreators.removeProduct).toBeDefined();
    });

    // it('should return the correct data and cart values', () => {
    //     wrapper.setProps({ data: filterData });
    //     wrapper.setProps({ cart: newData });
    //     const mockState = {
    //         product: newData,
    //         cart: newData
    //     };
    //     console.log(wrapper.props())
    //     // expect(wrapper.prop('data'))
    //     // expect(wrapper.prop('cart')).toEqual(mockState.cart);
    // });

    it('should dispatch actions when the corresponding function is called', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        expect(props.productList).toBeDefined();
        expect(props.addProduct).toBeDefined();
        expect(props.removeProduct).toBeDefined();

        props.productList();
        expect(dispatch).toHaveBeenCalled();

        props.addProduct(addProduct);
        expect(dispatch).toHaveBeenCalledWith(checkAddProduct);

        props.removeProduct(3);
        expect(dispatch).toHaveBeenCalledWith(checkRemoveProduct);
    });
})