import { createSlice } from '@reduxjs/toolkit';

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: { message: 'Hi there~'},
});

export default greetingsSlice.reducer;
