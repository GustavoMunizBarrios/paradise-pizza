import { configureStore } from '@reduxjs/toolkit';
// here also can be : import userReducer from './features/user/userSlice';
import userSlice from './features/user/userSlice';
import cartSlice from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
