import 'react-native';
import React from 'react';
import SpendAmount from '../src/Components/SpendAmountContainer/spendAmount'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('SpendAmount Component', () => {
  test('SpendAmount Component', () => {
    const wrapper = shallow(<SpendAmount />);
    expect(wrapper.exists()).toBe(true);
  });
  it('SpendAmount  toMatchSnapshot', () => {
    const wrapper = shallow(<SpendAmount />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});