export const FETCH_MISSIONS = 'FETCH_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';
export const LOAD_JOINED_MISSIONS = 'LOAD_JOINED_MISSIONS';

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();

  dispatch({
    type: FETCH_MISSIONS,
    payload: data,
  });
};

export const joinMission = (missionId) => (dispatch, getState) => {
  dispatch({
    type: JOIN_MISSION,
    payload: missionId,
  });
  
  const { missions } = getState();
  localStorage.setItem('joinedMissions', JSON.stringify(missions.joinedMissions));
};

export const leaveMission = (missionId) => (dispatch, getState) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: missionId,
  });
  
  const { missions } = getState();
  localStorage.setItem('joinedMissions', JSON.stringify(missions.joinedMissions));
};

export const loadJoinedMissions = () => (dispatch) => {
    const joinedMissions = JSON.parse(localStorage.getItem('joinedMissions')) || [];
    dispatch({
      type: LOAD_JOINED_MISSIONS,
      payload: joinedMissions,
    });
  };
