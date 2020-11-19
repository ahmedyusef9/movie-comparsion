import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {IMovie} from "../../model/movie";
import {Store} from "@ngrx/store";
import {EntityState} from "../../data-store/reducers";
import {IMovieSelectors} from "../../data-store/services";
import * as IMovieActions from "../../data-store/actions"

@Component({
  selector: 'hija-add-movie',
  templateUrl: './add-movie.component.html',
  styles: [
  ]
})
export class AddMovieComponent implements OnInit {
  movieForm = this.formBuilder.group({
    name:['', Validators.required],
    imdbUrl:['', Validators.required],
    rating: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private store: Store<EntityState>,
              private movieSelectors: IMovieSelectors) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.movieForm.valid) {
      const movie = IMovie.create({...this.movieForm.value});
      this.add(movie)
      this.movieForm.reset()
    }
  }
  add(movie: IMovie) {
    this.store.dispatch(new IMovieActions.AddMovie(movie));
    // this.store.dispatch(new IMovieActions.AddCustomer(customer));
  }
}
