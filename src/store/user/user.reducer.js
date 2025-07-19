import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  currentUser: null,
};

//IMPORTANT NOTE: redux needs you to return objects that are IMMUTABLE
export const userSlice = createSlice({
  name:  'users', //namespaces actions for us, creates reducer as well as actions as well as actionTypes
  initialState: INITIAL_STATE,
  reducers: { //actions are dealt with here
    setCurrentUser(state, action) { //action
      state.currentUser = action.payload //it looks like we're changing the state, it actually generates a new object. ITS STILL IMMUTABLE
    } //define the name of the reducer function that represents the function that represents the action that updates this reducer slice
  }
});
//non-serializable: plain objects that can be stringified
//when you initialize your middleware, it actually creates a non-serializable object
export const {setCurrentUser} = userSlice.actions; //actions is a property of createslice objects

export const userReducer = userSlice.reducer;