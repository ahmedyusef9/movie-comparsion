import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from "./material.module";
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [ToolbarComponent],
        exports: [
            ToolbarComponent
        ],
        imports: [
            CommonModule,
            MaterialModule.components
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map