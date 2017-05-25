import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count.js';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  })
  it('Renders the correct guess', () => {
    const value = Math.floor(Math.random() * 100);
    const wrapper = shallow(<GuessCount count={value}/>);
    expect(wrapper.text()).toEqual(`Guess #${value}!`)
  })
});
