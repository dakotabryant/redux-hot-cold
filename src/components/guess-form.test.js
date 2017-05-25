import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form.js';
import {makeGuess} from '../actions'

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  })
  it('Should dispatch makeGuess', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />)
    const value = "15";
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value))
  })
});
