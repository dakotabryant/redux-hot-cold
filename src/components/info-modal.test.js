import React from 'react';
import {shallow, mount} from 'enzyme';

import {InfoModal} from './info-modal.js';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal />);
  })

  it('sends dispatch when close button is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<InfoModal dispatch={dispatch}/>);
    wrapper.find('.close').simulate('click', {preventDefault(){}})
    expect(dispatch).toHaveBeenCalled();
  })
});
