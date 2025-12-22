import { configureStore } from '@reduxjs/toolkit';
import mentorsReducer from './slices/mentorsSlice';

export const store = configureStore({
    reducer: {
        mentors: mentorsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;