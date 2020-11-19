import { Component } from '@angular/core';

@Component({
  selector: 'hija-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <hija-toolbar></hija-toolbar>
     <div class="container" style="margin: 5px 0px">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
