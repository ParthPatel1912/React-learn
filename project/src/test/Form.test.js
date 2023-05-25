import { shallow } from 'enzyme';
import Form from '../Components/Form';

describe('Test case for Form Component', () => {
    it('name change', () => {
        const wrapper = shallow(<Form />);
        wrapper.find('input').simulate('change', { target: { value: 'Test' } });
        const updatedState = wrapper.state('name');
        expect(updatedState).toEqual('Test');
    })
    it('name click enter', () => {
        const wrapper = shallow(<Form />);
        wrapper.setState({ name: 'Test' });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('age')).toEqual('Test');
    })
})
