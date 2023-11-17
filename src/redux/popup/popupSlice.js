import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: { isopen: false, title: 'title', description: 'description', imgurl: '@/assets/Death-note-L.jpg', techs: ['tech1', 'tech2'] },
  reducers: {
    setPopup: (state, action) => {
      state.isopen = !state.isopen;
      if (state.isopen) {
        const { title, description, imgurl, techs } = action.payload;
        state.title = title;
        state.description = description;
        state.imgurl = imgurl;
        state.techs = techs;
      }
    },
  },
});

export const { setPopup } = popupSlice.actions;

export default popupSlice.reducer;
