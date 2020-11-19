import { Action } from '@ngrx/store';

import { IMovie } from '../../model/movie';
import { DataAction, DataErrorAction } from './data.actions';
import {DataServiceError} from "../services";

export const ADD_MOVIE = '[Movie] ADD_MOVIE';
export const ADD_MOVIE_ERROR = '[Movie] ADD_MOVIE_ERROR';
export const ADD_MOVIE_SUCCESS = '[Movie] ADD_MOVIE_SUCCESS';

export const GET_MOVIES = '[Movie] GET_MOVIES';
export const GET_MOVIES_SUCCESS = '[Movie] GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = '[Movie] GET_MOVIES_ERROR';

export const GET_MOVIE = '[Movie] GET_MOVIE';
export const GET_MOVIE_SUCCESS = '[Movie] GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR = '[Movie] GET_MOVIE_ERROR';

export const SET_MOVIE_LOADING = '[Movie] SET_MOVIE_LOADING';

// Initialize Movie Actions

export abstract class MovieAction implements DataAction<IMovie> {
    readonly type: string;
    constructor(public readonly payload: IMovie) {}
}

export abstract class MovieErrorAction implements DataErrorAction<IMovie> {
    readonly type: string;
    constructor(public readonly payload: DataServiceError<IMovie>) {}
}

export class GetMovies implements Action {
    readonly type =  GET_MOVIES;
}

export class GetMoviesSuccess implements Action {
    readonly type = GET_MOVIES_SUCCESS;
    constructor(public readonly payload: IMovie[]) {
    }
}
export class GetMoviesError implements Action {
    readonly type = GET_MOVIES_ERROR;
    constructor(public readonly payload: any) {
    }
}

export class AddMovie extends MovieAction {
    readonly type = ADD_MOVIE;
}
export class AddMovieSuccess extends MovieAction {
    readonly type = ADD_MOVIE_SUCCESS
}
export class AddMovieError extends MovieErrorAction {
    readonly type = ADD_MOVIE_ERROR;
}

export class SetMovieLoading {
    readonly type = SET_MOVIE_LOADING;
    constructor(public payload = true) {
    }
}
export type AllMovieActions =
    | GetMovies
    | GetMoviesError
    | GetMoviesSuccess
    | AddMovie
    | AddMovieError
    | AddMovieSuccess
    | SetMovieLoading ;
