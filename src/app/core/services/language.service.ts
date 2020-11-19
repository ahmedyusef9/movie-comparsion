import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {rejects} from "assert";
import {HttpClient} from "@angular/common/http";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages = [
      'arabic',
      'english',
      'hebrew'
  ];
  private defaultLanguage = 'english';
  private _languagesJSONs = {};
  languagesPromise = {}
  constructor(
      private http: HttpClient,
      private logger: LoggerService
  ) {
      this.loadLanguages().then(r => console.log(r));
  }

  async loadLanguages() {
      for (let lang of this.languages) {
          this._languagesJSONs[lang] = await this.getJSON('/assets/languages/', lang).toPromise()
              .catch(() => {
                  this.logger.logI(LanguageService.name, `Error in load : ${lang}`);
              })
      }
  }

  public getJSON(folder:string, language: string): Observable<any> {
      const file = folder + language + '.json';
      return this.http.get(file);
  }
}
