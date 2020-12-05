import {configureStore} from '@reduxjs/toolkit';
import {basketSlice} from '../slices';
const store = configureStore({ reducer: basketSlice.reducer });
export {store};