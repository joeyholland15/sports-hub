import axios from 'axios';
import * as actions from './types';
import { USERNAME, TOKEN, MLB_API } from '../../config';

const encryptedAuth = window.btoa(`${USERNAME}:${TOKEN}`);

const CURRENT_API = `${MLB_API}/2017-regular/`;

export function fetchCumulativeStatsSuccess(atBats, game, gameId) {
  return {
    type: actions.MLB_FETCH_CUMULATIVE_SUCCESS,
    atBats,
    gameId,
    game,
  };
}

export function fetchCumulativeStats(gameId) {
  return (dispatch) => {
    dispatch({
      type: actions.MLB_FETCH_CUMULATIVE,
    });
    return axios.get(`${CURRENT_API}cumulative_player_stats.json`, {
      headers: {
        Authorization: `Basic ${encryptedAuth}`,
      },
    }).then((resp) => {
      if (resp.error) {
        return resp.error;
      }
      console.log('RESP', resp);
      // const atBats = resp.data.gameplaybyplay.atBats.atBat;
      // const game = resp.data.gameplaybyplay.game;
      // return dispatch(fetchCumulativeStatsSuccess(atBats, game, gameId));
    });
  };
}
