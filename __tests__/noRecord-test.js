import 'react-native';
import React from 'react';
import NoRecord from '../src/Components/NoRecord/NoRecord'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('NoRecord Component', () => {
  test('NoRecord Component', () => {
    const wrapper = shallow(<NoRecord />);
    expect(wrapper.exists()).toBe(true);
  });
  it('NoRecord  toMatchSnapshot', () => {
    const wrapper = shallow(<NoRecord />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});