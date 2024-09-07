import {
  FETCH_ROCKETS_SUCCESS,
  RESERVE_ROCKET,
  CANCEL_RESERVATION,
  SET_RESERVED_ROCKETS,
  FETCH_MISSIONS,
  JOIN_MISSION,
  LEAVE_MISSION,
  LOAD_JOINED_MISSIONS
} from './actions';

const initialState = {
  rockets: [],
  reservedRockets: JSON.parse(localStorage.getItem('reservedRockets')) || [],
  missions: [],
  joinedMissions: JSON.parse(localStorage.getItem('joinedMissions')) || [],
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

    case FETCH_MISSIONS:
      return {
        ...state,
        missions: action.payload
      };
    case JOIN_MISSION:
      return {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload]
      };
    case LEAVE_MISSION:
      return {
        ...state,
        joinedMissions: state.joinedMissions.filter(
          mission => mission.mission_id !== action.payload
        )
      };
    case LOAD_JOINED_MISSIONS:
      return {
        ...state,
        joinedMissions: action.payload || []
      };

    default:
      return state;
  }
};

export default reducer;
