import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
let NavigatorService = class NavigatorService {
    constructor() {
        this._state = new Subject();
    }
};
NavigatorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NavigatorService);
export { NavigatorService };
//# sourceMappingURL=navigator.service.js.map