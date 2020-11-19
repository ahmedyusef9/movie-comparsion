import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from "./material.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  declarations: [ToolbarComponent],
  exports: [
      BrowserAnimationsModule,
      ToolbarComponent,
      MaterialModule.components,
  ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MaterialModule.components,
        RouterModule,
    ],
})
export class SharedModule { }
