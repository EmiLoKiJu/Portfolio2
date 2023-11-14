import { createSlice } from '@reduxjs/toolkit';

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: { message: '' },
});

export default greetingsSlice.reducer;
