import React from 'react';
import LeagueLink from './LeagueLink';
import leagues from '../../constants/leagues';
import './LeagueLinks.scss';

class LeagueLinks extends React.Component {
  render() {
    return (
      <div styleName="container">
        {leagues.map((item) => (
          <LeagueLink key={item} league={item} />
        ))}
      </div>
    );
  }
}

export default LeagueLinks;
