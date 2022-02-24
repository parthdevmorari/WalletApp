import 'react-native';
import React from 'react';
import ShowhideCard from '../src/Components/ShowhideCard/showHideCard'
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('ShowhideCard Component', () => {
  test('ShowhideCard Component', () => {
    const wrapper = shallow(<ShowhideCard />);
    expect(wrapper.exists()).toBe(true);
  });
  it('ShowhideCard  toMatchSnapshot', () => {
    const wrapper = shallow(<ShowhideCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});