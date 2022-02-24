import 'react-native';
import React from 'react';
import TextArea from '../src/Components/TextArea/TextArea'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('TextArea Component', () => {
  test('TextArea Component', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.exists()).toBe(true);
  });
  it('TextArea  toMatchSnapshot', () => {
    const wrapper = shallow(<TextArea />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});