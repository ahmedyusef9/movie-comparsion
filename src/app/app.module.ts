import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PublicModule} from "./public/public.module";
import {SharedModule} from "./shared/shared.module";
import {AuthenticModule} from "./authentic/authentic.module";
import {AdminModule} from "./admin/admin.module";
import {DataStoreModule} from "./data-store/data-store.module";
import {MetaReducer, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    SharedModule,
    AuthenticModule,
    AdminModule,
    DataStoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
