import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './reducers';

export const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});
