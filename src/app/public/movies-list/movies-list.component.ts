import { Component, OnInit } from '@angular/core';
import {from, Observable, of} from "rxjs";
import {IMovie} from "../../model/movie";
import {Store} from "@ngrx/store";
import {EntityState} from "../../data-store/reducers";
import {IMovieSelectors} from "../../data-store/services";
import * as IMovieActions from "../../data-store/actions"

@Component({
  selector: 'hija-movies-list',
  templateUrl: './movies-list.component.html',
  styles: [
  ]
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<IMovie[]>;
  loading$: Observable<boolean>;

  constructor(
      private store: Store<EntityState>,
      private movieSelectors: IMovieSelectors
  ) {
    this.movies$ = this.movieSelectors.movies$;
    this.loading$ = this.movieSelectors.loading$;
  }

  ngOnInit(): void {
    this.store.dispatch(new IMovieActions.GetMovies());
  }

  openImdbTab(imdbUrl: string) {
    window.open(imdbUrl);
  }
}
