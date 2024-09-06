import { FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION, LOAD_JOINED_MISSIONS } from './actions';

const initialState = {
  missions: [],
  joinedMissions: [],
  missionData: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };
    case JOIN_MISSION:
      return {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload],
      };
    case LEAVE_MISSION:
      return {
        ...state,
        joinedMissions: state.joinedMissions.filter(
          (missionId) => missionId !== action.payload
        ),
      };
    case LOAD_JOINED_MISSIONS:
      return {
        ...state,
        joinedMissions: action.payload,
      };
    default:
      return state;
  }
};

export default missionReducer;
