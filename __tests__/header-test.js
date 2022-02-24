import 'react-native';
import React from 'react';
import Header from '../src/Components/Header/Header'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('Header Component', () => {
  test('Header Component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Header  toMatchSnapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});