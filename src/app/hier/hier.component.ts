import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[hier]',
  templateUrl: './hier.component.html',
  styleUrls: [ './hier.component.css' ]
})
export class HierComponent implements OnInit {
  displayuser = {}
  selected_role={}
  hier = [];
   hier2 = [];
  hier_array = [];

  hier_icons= '[{"level":"Organisation","icon":"building"},{"level":"Country","icon":"globe"},{"level":"Region","icon":"compass"},{"level":"County / Area / Scottish Region / Overseas Branch","icon":"map-marker-alt"},{"level":"District","icon":"map-marked-alt"},{"level":"Group","icon":"users"},{"level":"Section","icon":"user-friends"} ]'

constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  } 

get_icon(d) {
  return "fa_"+this.hier_array.find(a=>a.level==d).icon
}
is_hier(s,t){
 // debugger;
  if (t!="--- Not Selected ---"&&t!="--- No Items Available ---") { 
  return s.substring(0,31)=='ctl00_workarea_cbo_p1_location_' } else return false
}
  ngOnInit() {
    this.displayuser=this.globals.compassuser[0];
    this.hier=[]
    this.hier_array = JSON.parse(this.hier_icons)
     
  }
  
}

