import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import buildingsReducer from '../features/buildings/buildingSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    buildings: buildingsReducer,
  },
});
