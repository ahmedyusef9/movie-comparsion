import { Component, OnInit } from '@angular/core';
import {NavigatorService} from "../../core/services/navigator.service";

@Component({
  selector: 'hija-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [
      './toolbar.component.css'
  ]
})
export class ToolbarComponent implements OnInit {

  constructor(private navigator: NavigatorService) { }

  ngOnInit(): void {

  }

}
