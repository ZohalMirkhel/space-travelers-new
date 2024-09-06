import axios from 'axios';

export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
export const SET_RESERVED_ROCKETS = 'SET_RESERVED_ROCKETS';

export const fetchRockets = () => async (dispatch) => {
  dispatch({ type: FETCH_ROCKETS_REQUEST });

  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const validRockets = response.data.filter(rocket => rocket && rocket.id);
    dispatch({ type: FETCH_ROCKETS_SUCCESS, payload: validRockets });
  } catch (error) {
    dispatch({ type: FETCH_ROCKETS_FAILURE, payload: error.message });
  }
};

export const setReservedRockets = (rockets) => ({
  type: SET_RESERVED_ROCKETS,
  payload: rockets
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
    payload: { id: rocketId }
  });
};

export const cancelReservation = (rocketId) => (dispatch) => {
  const currentReservations = JSON.parse(localStorage.getItem('reservedRockets')) || [];
  const updatedRockets = currentReservations.filter(rocket => rocket && rocket.id !== rocketId);
  localStorage.setItem('reservedRockets', JSON.stringify(updatedRockets));

  dispatch({
    type: CANCEL_RESERVATION,
    payload: rocketId
  });
};
