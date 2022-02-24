import 'react-native';
import React from 'react';
import card from '../src/Components/Card/card'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('Card Component', () => {
  test('Card Component', () => {
    const wrapper = shallow(<card />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Card  toMatchSnapshot', () => {
    const wrapper = shallow(<card />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});