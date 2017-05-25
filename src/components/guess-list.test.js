import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from './guess-list.js';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  })
  it('Renders a list of guesses', () => {
    const guesses = [15, 25, 35];
    const wrapper = shallow(<GuessList guesses={guesses}/>);
    const eachGuess = wrapper.find('li');
    guesses.forEach((item, index) => {
      expect(eachGuess.at(index).text()).toEqual(item.toString())
    })
  })
});
