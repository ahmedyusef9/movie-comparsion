import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MoviesListComponent } from './movies-list/movies-list.component';
import {MaterialModule} from "../shared/material.module";

const routes: Routes = [
  { path: 'public',  component: MoviesListComponent }
];

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule.components,
    CommonModule
  ],
  exports: [RouterModule]
})
export class PublicModule { }
