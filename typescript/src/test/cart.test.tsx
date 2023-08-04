import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Cart, mapDispatchToProps } from '../components/Cart';

const initialData = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        qty: 1
    }
];

type PropsCart = {
    addQty: (id: number) => void;
    subQty: (id: number) => void;
    removeProduct: (id: number) => void;
    cart: Array<{
        id: number;
        image: string;
        title: string;
        price: number;
        description: string;
        rating: {
            count: number;
            rate: number;
        };
        qty: number;
        category: string;
    }>;
};

const Props: PropsCart = {
    addQty: jest.fn(),
    subQty: jest.fn(),
    removeProduct: jest.fn(),
    cart: initialData
}

const initialData_new = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        qty: 3
    }
];

const Props_new = {
    addQty: jest.fn(),
    subQty: jest.fn(),
    removeProduct: jest.fn(),
    cart: initialData_new
}

const Props_empty = {
    addQty: jest.fn(),
    subQty: jest.fn(),
    removeProduct: jest.fn(),
    cart: []
}

const addProductCart = {
    type: 'PRODUCT_CART_ADD',
    payload: 1
}

const subProductCart = {
    type: 'PRODUCT_CART_SUB',
    payload: 1
}

const removeProductCart = {
    type: 'PRODUCT_REMOVE',
    payload: 3
}

let wrapper: ShallowWrapper;
beforeEach(() => {
    wrapper = shallow(
        // @ts-ignore
        <Cart {...Props} />
    );
});

describe('Test case for List Component', () => {
    it('subqty click', () => {
        const input = wrapper.find({ 'data-test-id': 'subQty' });
        input.simulate('click');
        expect(input).toBeTruthy();
    })

    it('subqty disable event', () => {
        const wrapper_new = shallow(
            // @ts-ignore
            <Cart {...Props_new} />
        );
        const input = wrapper_new.find({ 'data-test-id': 'subQty' });
        input.simulate('click');
        expect(input).toBeTruthy();
    })

    it('addqty event', () => {
        const input = wrapper.find({ 'data-test-id': 'addQty' });
        input.simulate('click');
        expect(input).toBeTruthy();
    })

    it('removeItem event', () => {
        const input = wrapper.find({ 'data-test-id': 'removeItem' });
        input.simulate('click');
        expect(input).toBeTruthy();
    })

    it('should return the correct action creators', () => {
        // @ts-ignore
        const actionCreators = mapDispatchToProps();
        expect(actionCreators.addQty).toBeDefined();
        expect(actionCreators.subQty).toBeDefined();
        expect(actionCreators.removeProduct).toBeDefined();
    });

    it('should dispatch actions when the corresponding function is called', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        expect(props.addQty).toBeDefined();
        expect(props.subQty).toBeDefined();
        expect(props.removeProduct).toBeDefined();

        props.addQty(1);
        expect(dispatch).toHaveBeenCalledWith(addProductCart);

        props.subQty(1);
        expect(dispatch).toHaveBeenCalledWith(subProductCart);

        props.removeProduct(3);
        expect(dispatch).toHaveBeenCalledWith(removeProductCart);
    });

    it('empty cart', () => {
        const wrapper_new = shallow(
            // @ts-ignore
            <Cart {...Props_empty} />
        );
    })
});