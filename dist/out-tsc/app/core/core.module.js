import { __decorate, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBusService } from "./services/event-bus.service";
let CoreModule = class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('Core is already loaded. Import it in the AppModule only');
        }
    }
};
CoreModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        providers: [
            EventBusService
        ]
    }),
    __param(0, Optional()), __param(0, SkipSelf())
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map