import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessSection} from './guess-section.js';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  })

  it('Renders feedback', () => {
    const feedback = 'feedback';
    const wrapper = shallow(<GuessSection feedback={feedback}/>);
    expect(wrapper.contains(feedback)).toEqual(true);
  })
});
