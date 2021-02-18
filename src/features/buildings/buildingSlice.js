import {createSlice} from '@reduxjs/toolkit';
import {getAllBuildings} from '../../app/api.js';

export const buildingSlice = createSlice({
  name: 'building',
  initialState: {
    buildings: [],
    loading: false,
  },
  reducers: {
    setLoadingOn: (state) => {
      state.loading = true;
    },
    setLoadingOff: (state) => {
      state.loading = false;
    },
    updateBuildings: (state, action) => {
      state.buildings = action.payload;
    },
  },
});

export const {setLoadingOn, setLoadingOff, updateBuildings} = buildingSlice.actions;

export const fetchBuildings = () => (dispatch) => {
  dispatch(buildingSlice.actions.setLoadingOn());
  getAllBuildings()
      .then((res) => {
        dispatch(buildingSlice.actions.updateBuildings(res.data.results));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => dispatch(buildingSlice.actions.setLoadingOff()));
};

export const isLoading = (state) => state.buildings.loading;
export const selectBuildings = (state) => state.buildings.buildings;

export default buildingSlice.reducer;
