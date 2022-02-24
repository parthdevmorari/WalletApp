import 'react-native';
import React from 'react';
import RowItem from '../src/Components/RowItem/RowItem'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('RowItem Component', () => {
  test('RowItem Component', () => {
    const wrapper = shallow(<RowItem />);
    expect(wrapper.exists()).toBe(true);
  });
  it('RowItem  toMatchSnapshot', () => {
    const wrapper = shallow(<RowItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});