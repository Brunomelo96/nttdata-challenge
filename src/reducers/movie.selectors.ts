import { RootState } from 'app/store';

export const selectMovieData = (state: RootState) => state.movie.data;
export const selectMovieLoading = (state: RootState) => state.movie.loading;
