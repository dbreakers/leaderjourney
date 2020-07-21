import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[hier]',
  templateUrl: './hier.component.html',
  styleUrls: [ './hier.component.css' ]
})
export class HierComponent implements OnInit {
  
  selected_role={}
  hier = [];

  hiericons= '[{"name":"","icon":"bullseye"},]'

constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  } 


  ngOnInit() {
    this.selected_role = this.globals.compassdata.object.roles.find(r=>r.id == this.globals.roleid )
this.hier = this.globals.compassdata.object.hierarchies[this.globals.roleid];
  }

}