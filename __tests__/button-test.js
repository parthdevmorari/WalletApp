import 'react-native';
import React from 'react';
import Button from '../src/Components/Button/Button'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('Button Component', () => {
  test('Button Component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Button  toMatchSnapshot', () => {
    const wrapper = shallow(<Button />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});