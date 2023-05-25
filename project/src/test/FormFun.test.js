import { shallow } from 'enzyme';
import FormFun from '../Components/FormFun';

describe('Test case for form function component', () => {
    it('set state', () => {
        const wrapper = shallow(<FormFun />);
        wrapper.find('#Home').simulate('click');
        // const navigateSpy = jest.spyOn(Router, 'navigate');
        // expect(navigateSpy).toHaveBeenCalledWith(['/news']);
        expect(wrapper.state('location.pathname')).toBe('/');
    })
})
