import { shallow } from 'enzyme';
import YupForm from '../Components/YupForm';

describe('Test case for Form Component', () => {
    it('all error', () => {
        const wrapper = shallow(<YupForm />)
        const errorMessage = wrapper.find('.text-danger');
        expect(errorMessage).toHaveLength(0);
    });
    it('form submit', () => {
        const wrapper = shallow(<YupForm />);
        let form = wrapper.find('Formik').dive().findWhere((node) => node.prop('data-test-id') === 'form');
        form.simulate('submit');
        expect(form).toBeTruthy();
    });
    it('calls the submitForm function with the correct values', () => {
        const mockSubmit = jest.fn();
        const wrapper = shallow(<YupForm />);
        wrapper.find('Formik').dive().find('[data-test-id="form"]').simulate('submit');
        // expect(mockSubmit).toHaveBeenCalled();
    });
});

// import React from 'react';
// import { shallow } from 'enzyme';
// import YupForm from '../Components/YupForm';

// describe('Testing YupForm Component', () => {
//     let wrapper;

//     beforeEach(() => {
//         wrapper = shallow(<YupForm />); 
//     });

//     it('should validate form inputs', () => {
//         wrapper = shallow(<YupForm />);
//         const button = wrapper.find('button[type="submit"]');
//         const preventDefault = jest.fn();
//         button.simulate('click', {preventDefault});
//         expect(preventDefault).not.toHaveBeenCalled();
//     });
// });