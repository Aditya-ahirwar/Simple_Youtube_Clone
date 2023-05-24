import { createSlice } from '@reduxjs/toolkit'


export const videoSlice = createSlice({
  name: 'video',
  initialState: null,
  reducers: {
    setVideo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setVideo } = videoSlice.actions;
export default videoSlice.reducer;
