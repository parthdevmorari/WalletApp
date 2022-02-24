import 'react-native';
import React from 'react';
import StickButton from '../src/Components/StickButton/StickButton'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('StickButton Component', () => {
  test('StickButton Component', () => {
    const wrapper = shallow(<StickButton />);
    expect(wrapper.exists()).toBe(true);
  });
  it('StickButton  toMatchSnapshot', () => {
    const wrapper = shallow(<StickButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});