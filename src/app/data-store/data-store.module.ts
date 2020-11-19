import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "./reducers";
import {IMovieEffects} from "./effects/movie.effects";
import {IMovieDataService, IMovieSelectors} from "./services";



@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      HttpClientModule,
      StoreModule.forFeature('entityCache', reducers),
      EffectsModule.forFeature([ IMovieEffects ])
  ],
  providers: [
    IMovieDataService,
    IMovieSelectors
  ],
  exports: [
      StoreModule, EffectsModule
  ]
})
export class DataStoreModule { }
