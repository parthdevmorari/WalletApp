import 'react-native';
import React from 'react';
import InputField from '../src/Components/InputField/InputField'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('InputField Component', () => {
  test('InputField Component', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.exists()).toBe(true);
  });
  it('InputField  toMatchSnapshot', () => {
    const wrapper = shallow(<InputField />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});