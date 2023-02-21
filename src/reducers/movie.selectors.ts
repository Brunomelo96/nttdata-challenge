import { RootState } from '@/app/store';

export const selectSelectedMovie = (state: RootState) => state.movie.selectedMovie;
