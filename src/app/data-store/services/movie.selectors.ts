

import {EntityState} from "../reducers";
import {createFeatureSelector, createSelector, select, Store} from "@ngrx/store";
import {IMovieState} from "../reducers/movie.reducer";
import {Injectable} from "@angular/core";


const getEntityState = createFeatureSelector<EntityState>('entityCache');


const getMovieState = createSelector(
    getEntityState,
    (state: EntityState) => state.movies
);

const getAllMovies = createSelector(
    getMovieState,
    (state: IMovieState) => state.movies
)

const getMovieLoading = createSelector(
    getMovieState,
    (state: IMovieState) => state.loading
)

@Injectable()
export class IMovieSelectors {
    constructor(private store: Store<EntityState>) {}

    movies$ = this.store.pipe(select(getAllMovies))
    movieState$ = this.store.pipe(select(getMovieState))
    loading$ = this.store.pipe(select(getMovieLoading))
}
