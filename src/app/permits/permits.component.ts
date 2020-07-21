import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[permits]',
  templateUrl: './permits.component.html',
  styleUrls: [ './permits.component.css' ]
})
export class PermitsComponent implements OnInit {

selected_role = {}; 

  constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  }

ngOnInit() {
this.selected_role = this.globals.compassdata.object.roles.find(r=>r.id == this.globals.roleid );
  }
}