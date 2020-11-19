import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router) { }

  goToAdmin(){
    this.router.navigate(['/admin'])
        .then(r => console.log('Moved to Admin console!'))
        .catch(error => console.warn(error))
  }
}
