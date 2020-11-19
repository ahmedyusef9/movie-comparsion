import {IMovie} from "../../model/movie";
import * as IMovieActions from '../actions';

export interface IMovieState {
    movies: IMovie[];
    movie: IMovie;
    loading: boolean;
    error: boolean;
}
export const initialState: IMovieState = {
    movies: [],
    movie: null,
    loading: false,
    error: false
};

export function reducer (
    state =  initialState,
    action: IMovieActions.AllMovieActions
): IMovieState {
    switch (action.type) {

        case IMovieActions.ADD_MOVIE: {
            return { ... state, loading: true};
        }
        case IMovieActions.ADD_MOVIE_SUCCESS: {
            return {
                ...state,
                loading: false,
                movies: [...state.movies, { ...action.payload }]
            }
        }
        case IMovieActions.ADD_MOVIE_ERROR: {
            return {
                ...state,
                loading: false
            }
        }
        case IMovieActions.GET_MOVIES: {
            return {
                ...state,
                loading: true
            }
        }
        case IMovieActions.GET_MOVIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        }
        default:
            break;
    }
}
