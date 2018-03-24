import React from 'react';
import Sidebar from './Sidebar';
import LeagueLinks from '../Navigation/LeagueLinks';
import './ChromeWrapper.scss';

const ChromeWrapper = ({ children }) => (
  <div styleName="wrapper">
    <Sidebar>
      <LeagueLinks />
    </Sidebar>
    <div styleName="content">
      {children}
    </div>
  </div>
)

export default ChromeWrapper;
