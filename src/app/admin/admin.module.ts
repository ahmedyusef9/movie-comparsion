import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import {SharedModule} from "../shared/shared.module";
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {path: 'admin',component: AdminConsoleComponent}
]

@NgModule({
  declarations: [AdminConsoleComponent, AddMovieComponent],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,
      SharedModule
  ]
})
export class AdminModule { }
