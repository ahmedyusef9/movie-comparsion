
import * as IMovieActions from '../actions';
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable} from "rxjs";
import {IMovie} from "../../model/movie";
import {IMovieDataService} from "../services/i-movie-data.service";
import {concatMap, switchMap} from "rxjs/operators";
import {Action} from "@ngrx/store";

const toAction = IMovieActions.toAction()
type MovieAction = IMovieActions.MovieAction;
type GetMoviesAction = IMovieActions.GetMovies;

@Injectable()
export class IMovieEffects {
    constructor(
        private actions$: Actions,
        private movieDataService: IMovieDataService
    ) {}

    @Effect()
    getMovies$: Observable<Action> = this.actions$
        .pipe(
            ofType(IMovieActions.GET_MOVIES),
            switchMap(() =>
            toAction(
                this.movieDataService.getMovies(),
                IMovieActions.GetMoviesSuccess,
                IMovieActions.GetMoviesError
            ))
        )

    @Effect()
    addMovie$: Observable<Action> = this.actions$
        .pipe(
            ofType(IMovieActions.ADD_MOVIE),
            concatMap((action: MovieAction) =>
            toAction(
                this.movieDataService.addMovie(action.payload),
                IMovieActions.AddMovieSuccess,
                IMovieActions.AddMovieError
            ))
        )
}
