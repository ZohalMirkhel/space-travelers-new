import axios from 'axios';

export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
export const SET_RESERVED_ROCKETS = 'SET_RESERVED_ROCKETS';

export const FETCH_MISSIONS = 'FETCH_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';
export const LOAD_JOINED_MISSIONS = 'LOAD_JOINED_MISSIONS';
export const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';


export const fetchRockets = () => async (dispatch) => {
  dispatch({ type: FETCH_ROCKETS_REQUEST });

  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const validRockets = response.data.filter((rocket) => rocket && rocket.id);
    dispatch({ type: FETCH_ROCKETS_SUCCESS, payload: validRockets });
  } catch (error) {
    dispatch({ type: FETCH_ROCKETS_FAILURE, payload: error.message });
  }
};

export const setReservedRockets = (rockets) => ({
  type: SET_RESERVED_ROCKETS,
  payload: rockets,
});

export const reserveRocket = (rocketId) => (dispatch) => {
  const currentReservations = JSON.parse(localStorage.getItem('reservedRockets')) || [];
  if (!Array.isArray(currentReservations)) {
    console.error('Invalid data in localStorage');
    return;
  }

  const updatedRockets = [...currentReservations, { id: rocketId }];
  localStorage.setItem('reservedRockets', JSON.stringify(updatedRockets));

  dispatch({
    type: RESERVE_ROCKET,
    payload: { id: rocketId },
  });
};

export const cancelReservation = (rocketId) => (dispatch) => {
  const currentReservations = JSON.parse(localStorage.getItem('reservedRockets')) || [];
  const updatedRockets = currentReservations.filter((rocket) => rocket && rocket.id !== rocketId);
  localStorage.setItem('reservedRockets', JSON.stringify(updatedRockets));

  dispatch({
    type: CANCEL_RESERVATION,
    payload: rocketId,
  });
};


export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    dispatch({ type: 'FETCH_MISSIONS_SUCCESS', payload: data });
  } catch (error) {
    console.error('API call failed:', error);
    dispatch({ type: FETCH_MISSIONS_FAILURE, payload: error.message });
    // Optionally, show a user-friendly message here
  }
};


export const joinMission = (missionId) => (dispatch, getState) => {
  const { missions } = getState();
  const mission = missions.missions.find((mission) => mission.mission_id === missionId);

  if (!missions.joinedMissions.some((joined) => joined.mission_id === missionId)) {
    dispatch({
      type: JOIN_MISSION,
      payload: mission,
    });

    const updatedJoinedMissions = [...missions.joinedMissions, mission];
    localStorage.setItem('joinedMissions', JSON.stringify(updatedJoinedMissions));
  }
};

export const leaveMission = (missionId) => (dispatch, getState) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: missionId,
  });

  const { missions } = getState();
  const updatedJoinedMissions = missions.joinedMissions.filter(
    (mission) => mission.mission_id !== missionId
  );
  localStorage.setItem('joinedMissions', JSON.stringify(updatedJoinedMissions));
};

export const loadJoinedMissions = () => (dispatch) => {
  const joinedMissions = JSON.parse(localStorage.getItem('joinedMissions')) || [];
  dispatch({
    type: LOAD_JOINED_MISSIONS,
    payload: joinedMissions,
  });
};
