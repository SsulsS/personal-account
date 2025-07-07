import { createSlice } from '@reduxjs/toolkit';

import { IMainState } from './types';

const initialState: IMainState = {
  isLoading: false,
};

const mainSlise = createSlice({
  name: 'main',
  initialState,
  reducers: {},
});

export default mainSlise.reducer;
