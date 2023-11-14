import { createSlice } from '@reduxjs/toolkit';

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: { message: 'Hello there~'},
});

export default greetingsSlice.reducer;
