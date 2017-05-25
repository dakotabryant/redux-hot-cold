import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoModal from './info-modal';
import {Header} from './header.js';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  })

  it('should show infomodal if showInfoModal is true', () => {
    const wrapper = shallow(<Header showInfoModal={true}/>);
    expect(wrapper.find(InfoModal).exists()).toEqual(true);
  })

  it('should hide infomodal if showInfoModal is false', () => {
    const wrapper = shallow(<Header showInfoModal={false} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(false);
  })
});
