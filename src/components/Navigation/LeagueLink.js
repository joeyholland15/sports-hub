import React from 'react';
import { Link } from 'react-router-dom';
import './LeagueLink.scss';

const icons = {
  NBA: 'baseball',
  MLB: 'spinner',
  NFL: 'spinner',
}

const LeagueLink = ({ league }) => (
   <Link to={league === 'Home' ? '/' : `/${league.toLowerCase()}`} styleName="link">
     {league}
   </Link>
)

export default LeagueLink;
