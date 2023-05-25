import { shallow } from 'enzyme';
import TestForm from '../Components/TestForm';

const countriesList = [
    {
        name: 'United States',
        cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia']
    },
    {
        name: 'Canada',
        cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa']
    },
    {
        name: 'United Kingdom',
        cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Glasgow']
    },
    {
        name: 'Australia',
        cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
    }
];

describe('test form', () => {
    it('first name', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="firstName"]').simulate('change', { target: { name: 'firstName', value: 'Test' } })
        expect(wrapper.state('firstName')).toEqual('Test');
    });

    it('last name', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="lastName"]').simulate('change', { target: { name: 'lastName', value: 'Test' } })
        expect(wrapper.state('lastName')).toEqual('Test');
    });

    it('address', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="address"]').simulate('change', { target: { name: 'address', value: 'Test' } })
        expect(wrapper.state('address')).toEqual('Test');
    });

    it('age', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="age"]').simulate('change', { target: { name: 'age', value: 30 } })
        expect(wrapper.state('age')).toEqual(30);
    });

    it('DOB', () => {
        const wrapper = shallow(<TestForm />);
        var Data = new Date();
        var year = Data.getFullYear();
        var month = Data.getMonth() + 1;
        var date = Data.getDate();
        var final = date + "-" + month + "-" + year;
        wrapper.find('[data-test-id="dateOfBirth"]').simulate('change', { target: { name: 'dateOfBirth', value: final } })
        expect(wrapper.state('dateOfBirth')).toEqual(final);
    });

    it('email', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="email"]').simulate('change', { target: { name: 'email', value: 'test@xyz.com' } })
        expect(wrapper.state('email')).toEqual('test@xyz.com');
    });

    it('password', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="password"]').simulate('change', { target: { name: 'password', value: 'testpassword' } })
        expect(wrapper.state('password')).toEqual('testpassword');
    });

    it('confirmPassword', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="confirmPassword"]').simulate('change', { target: { name: 'confirmPassword', value: 'testpassword' } })
        expect(wrapper.state('confirmPassword')).toEqual('testpassword');
        wrapper.find('[data-test-id="password"]').simulate('change', { target: { name: 'password', value: 'testpassword' } })
        expect(wrapper.state('confirmPassword')).toBe(wrapper.state('password'))
    });

    it('gender', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="gender"]').simulate('change', { target: { name: 'gender', value: 'male' } })
        expect(wrapper.state('gender')).toEqual('male');
    });

    it('hobby', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="hobby"]').simulate('change', { target: { name: 'hobby', value: ['cricket', 'football'] } })
        expect(wrapper.state('hobby')).toEqual(['cricket', 'football']);
    });

    it('country map', () => {
        const wrapper = shallow(<TestForm />);
        const cityDropdown = wrapper.find('[data-test-id="country"]')
        const cityDropdownLength = cityDropdown.children().length
        expect(cityDropdown.find('option')).toHaveLength(cityDropdownLength);
    });

    it('country', () => {
        // jest.useFakeTimers();
        const wrapper = shallow(<TestForm />);
        wrapper.setState({ country: countriesList })
        // expect(wrapper.state().country).toEqual([]);
        // jest.runAllTimers();
        // expect(wrapper.state().country).toEqual(wrapper.state('country'));
        expect(wrapper.state().country).toEqual(countriesList);
    });

    it('country by test id', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.setState({ country: countriesList })
        const listItems = wrapper.find('[data-test-id^="country-list-"]');
        expect(listItems).toHaveLength(4);
    });

    it('country settimeout', () => {
        jest.useFakeTimers();
        const wrapper = shallow(<TestForm />);
        jest.runAllTimers();
        expect(wrapper.state().country).toEqual(countriesList);
    });
    it('props', () => {
        const wrapper = shallow(<TestForm data='item' />);
        console.log(wrapper.props());
        // expect(wrapper.state().country).toEqual(countriesList);
    });

    it('city', () => {
        const wrapper = shallow(<TestForm />);
        wrapper.find('[data-test-id="city"]').simulate('change', { target: { name: 'city', value: 'Abd' } })
        expect(wrapper.state('city')).toEqual('Abd');
    });

    it('prevents default form submission behavior and calls handleSubmit', () => {
        const mockEvent = { preventDefault: jest.fn() };
        const wrapper = shallow(<TestForm />);
        const submitButton = wrapper.find('[data-test-id="submit"]');
        expect(submitButton).toHaveLength(1);
        submitButton.simulate('click');
        const formElement = wrapper.find('[data-test-id="form"]');
        expect(formElement).toHaveLength(1);
        formElement.simulate('submit', mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('file uploader', () => {
        const wrapper = shallow(<TestForm />);
        const fileInput = wrapper.find('[data-test-id="profilePicture"]');
        const event = {
            target: {
                files: [{
                    name: 'UNIT TEST CASES IN REACTJS WITH JEST &.pptx',
                    lastModified: 1684480445263,
                    lastModifiedDate: 'Fri May 19 2023 12: 44: 05 GMT + 0530(India Standard Time)',
                    webkitRelativePath: '',
                    size: 7154101
                }],
                file: {
                    name: 'UNIT TEST CASES IN REACTJS WITH JEST &.pptx',
                    lastModified: 1684480445263,
                    lastModifiedDate: 'Fri May 19 2023 12: 44: 05 GMT + 0530(India Standard Time)',
                    webkitRelativePath: '',
                    size: 7154101
                }
            }
        }
        fileInput.simulate('change', event);
        expect(wrapper.state('profilePicture')).toEqual(event.target.file)
    });
})
