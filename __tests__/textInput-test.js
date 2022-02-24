import 'react-native';
import React from 'react';
import TextInput from '../src/Components/TextInput/TextInput'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('TextArea Component', () => {
  test('TextArea Component', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.exists()).toBe(true);
  });
  it('TextArea  toMatchSnapshot', () => {
    const wrapper = shallow(<TextInput />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});