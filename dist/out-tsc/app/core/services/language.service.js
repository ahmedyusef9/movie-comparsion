var LanguageService_1;
import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LanguageService = LanguageService_1 = class LanguageService {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
        this.languages = [
            'arabic',
            'english',
            'hebrew'
        ];
        this.defaultLanguage = 'english';
        this._languagesJSONs = {};
        this.languagesPromise = {};
        this.loadLanguages().then(r => console.log(r));
    }
    loadLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let lang of this.languages) {
                this._languagesJSONs[lang] = yield this.getJSON('/assets/languages/', lang).toPromise()
                    .catch(() => {
                    this.logger.logI(LanguageService_1.name, `Error in load : ${lang}`);
                });
            }
        });
    }
    getJSON(folder, language) {
        const file = folder + language + '.json';
        return this.http.get(file);
    }
};
LanguageService = LanguageService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LanguageService);
export { LanguageService };
//# sourceMappingURL=language.service.js.map