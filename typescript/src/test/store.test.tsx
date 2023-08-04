import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../redux/reducers';
import productSaga from '../redux/saga/productSaga';

// Import the component that uses the Redux store
import List from '../components/List';

// Create a mock Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a mock Redux store with the reducer and Saga middleware
const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the saga middleware
sagaMiddleware.run(productSaga);

let wrapper: ShallowWrapper;
beforeEach(() => {
    wrapper = shallow(
        <Provider store={store}>
            <List />
        </Provider>
    );
});

describe('Test case for store', () => {
    it('should render the component correctly', () => {
        expect(wrapper.find('#search')).toBeTruthy();
    });
});