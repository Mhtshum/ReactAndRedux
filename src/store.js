import { configureStore } from '@reduxjs/toolkit';
import tm from './tmReducer';

export const store =  configureStore({reducer: { tm },});

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

