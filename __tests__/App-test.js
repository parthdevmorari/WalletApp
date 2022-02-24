/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Enzyme, {shallow, mount} from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 import toJson from 'enzyme-to-json';
 import {Provider} from 'react-redux';
 import configureMockStore from 'redux-mock-store';
 import App from '../App';
 
 Enzyme.configure({adapter: new Adapter()});
 
 const mockStore = configureMockStore();
 const store = mockStore({});
 
 describe('Test Main App File', () => {
   test('Test Main App File', () => {
     const wrapper = shallow(
       <Provider store={store}>
         <App />
       </Provider>,
     );
     expect(wrapper.exists()).toBe(true);
   });
   it('Test Main App File', async () => {
     const wrapper = shallow(
       <Provider store={store}>
         <App />
       </Provider>,
     );
     expect(toJson(wrapper)).toMatchSnapshot();
   });
 });
 