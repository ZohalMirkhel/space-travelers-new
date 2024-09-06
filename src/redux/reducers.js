import { FETCH_ROCKETS_SUCCESS, RESERVE_ROCKET, CANCEL_RESERVATION, SET_RESERVED_ROCKETS } from './actions';

const initialState = {
  rockets: [],
  reservedRockets: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: action.payload
      };
    case SET_RESERVED_ROCKETS:
      return {
        ...state,
        reservedRockets: action.payload
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        reservedRockets: [...state.reservedRockets, { id: action.payload.id }]
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reservedRockets: state.reservedRockets.filter(rocket => rocket.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;