import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';
import * as movieReducers from './movie.reducer';


export type Action = actions.MovieAction;

export interface EntityState {
    movies: movieReducers.IMovieState;
}

export const reducers: ActionReducerMap<EntityState> = {
    movies: movieReducers.reducer
};
