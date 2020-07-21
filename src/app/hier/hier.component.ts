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
  hier_array = [];

  hier_icons= '[{"level":"Organisation","icon":"building"},{"level":"Country","icon":"globe"},{"level":"Region","icon":"compass"},{"level":"County / Area / Scottish Region / Overseas Branch","icon":"map-marker-alt"},{"level":"District","icon":"map-marked-alt"},{"level":"Group","icon":"users"},{"level":"Section","icon":"user-friends"} ]'

constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  } 


  ngOnInit() {
    this.selected_role = this.globals.compassdata.object.roles.find(r=>r.id == this.globals.roleid )
this.hier = this.globals.compassdata.object.hierarchies[this.globals.roleid];
this.hier_array = JSON.parse(this.hier_icons)
if(!this.hier[1].hasOwnProperty("icon")){
  for(var i=0;this.hier.length;i++){
    this.hier[i]['icon'] =this.hier_array.find(j=> j.level== this.hier[i]['level']).icon; 
  }
}
  }

}