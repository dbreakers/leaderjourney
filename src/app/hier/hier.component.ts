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
   hier2 = [];
  hier_array = [];

  hier_icons= '[{"level":"Organisation","icon":"building"},{"level":"Country","icon":"globe"},{"level":"Region","icon":"compass"},{"level":"County / Area / Scottish Region / Overseas Branch","icon":"map-marker-alt"},{"level":"District","icon":"map-marked-alt"},{"level":"Group","icon":"users"},{"level":"Section","icon":"user-friends"} ]'

constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  } 


  ngOnInit() {
    this.selected_role = this.globals.compassuser[0].roles.find(r=>r.roleid == this.globals.roleid )
this.hier2 = this.globals.compassus[0].hierarchy[this.globals.roleid];
this.hier_array = JSON.parse(this.hier_icons)
//if(!this.hier[1].hasOwnProperty("icon")){
  for(var i=0;this.hier2.length;i++){ 
    if (this.hier2[i][0].indexOf("ctl00_workarea_cbo_p1_location_")==0) {
      var entry = new Object 
      entry.level = this.hier2[i][0].substring(this.hier2[i][0].length-1)
      entry.description = this.hier2[i][2]
      entry.icon = this.hier_array[entry.level].icon;
      entry.level = this.hier_array[entry.level].level;
      if (entry.description!='--- Not Selected ---') {
      this.hier.push(entry)  
      }
    }
  
  } 
}
  }

