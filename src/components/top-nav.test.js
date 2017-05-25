import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav.js';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  })

  it('sends dispatch newGame when new is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch}/>);
    wrapper.find('.new').simulate('click', {preventDefault(){}})
    expect(dispatch).toHaveBeenCalled();
  })

  it('sends dispatch toggleInfoModal when what is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch}/>);
    wrapper.find('.what').simulate('click', {preventDefault(){}})
    expect(dispatch).toHaveBeenCalled();
  })

});
