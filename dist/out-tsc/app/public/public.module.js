import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MoviesListComponent } from './movies-list/movies-list.component';
const routes = [
    { path: 'public', component: MoviesListComponent }
];
let PublicModule = class PublicModule {
};
PublicModule = __decorate([
    NgModule({
        declarations: [MoviesListComponent],
        imports: [
            CommonModule, RouterModule.forRoot(routes)
        ]
    })
], PublicModule);
export { PublicModule };
//# sourceMappingURL=public.module.js.map