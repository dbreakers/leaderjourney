import { Component, OnInit } from '@angular/core';
import { OnsNavigator,  Params, } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[directory]',
  templateUrl: './directory.component.html',
  styleUrls: [ './directory.component.css' ]
})
export class DirectoryComponent implements OnInit {

  constructor(private navi: OnsNavigator,
              private _params: Params,
              private globals: Globals,) {
  } 

  
  
ngOnInit() {
  
  }
}