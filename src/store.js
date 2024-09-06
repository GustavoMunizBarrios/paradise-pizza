import { configureStore } from '@reduxjs/toolkit';
// here also can be : import userReducer from './features/user/userSlice';
import userSlice from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
