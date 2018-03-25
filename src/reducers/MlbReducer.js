const INITIAL_STATE = {
  cumulative: {},
};

export default function MlbReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MLB_FETCH_CUMULATIVE_SUCCESS':
    console.log('IN REDUCER', action)
      return {
        ...state,
        // cumulative: {
        //   ...state.items,
        //   [action.gameId]: action.data,
        // },
      };

    default:
      return state;
  }
}
