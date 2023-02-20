import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { movieReducer } from '@/reducers/movie.reducer';

export const store = configureStore({
  reducer: {
    monsters: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
