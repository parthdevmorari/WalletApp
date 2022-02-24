import 'react-native';
import React from 'react';
import AmountDetail from '../src/Components/AmountDetail'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('Amount Detail Component', () => {
  test('Amount Detail Component', () => {
    const wrapper = shallow(<AmountDetail />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Amount Detail  toMatchSnapshot', () => {
    const wrapper = shallow(<AmountDetail />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});