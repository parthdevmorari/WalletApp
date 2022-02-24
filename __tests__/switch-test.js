import 'react-native';
import React from 'react';
import Switch from '../src/Components/Switch/Switch'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('Switch Component', () => {
  test('Switch Component', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Switch  toMatchSnapshot', () => {
    const wrapper = shallow(<Switch />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});