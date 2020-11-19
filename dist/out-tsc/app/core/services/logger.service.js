import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let LoggerService = class LoggerService {
    _log(suffix, sender, msg) {
    }
    logI(sender, msg) {
        return this._log('I', sender, msg);
    }
};
LoggerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoggerService);
export { LoggerService };
//# sourceMappingURL=logger.service.js.map