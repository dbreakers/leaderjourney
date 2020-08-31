import { Component, OnInit, ViewChild } from '@angular/core';
import { OnsNavigator,  Params } from 'ngx-onsenui';
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
  max_c = 0;
  @ViewChild('carousel_hier') carousel;
  hier_icons= '[{"level":"Organisation","icon":"building"},{"level":"Country","icon":"globe"},{"level":"Region","icon":"compass"},{"level":"County / Area / Scottish Region / Overseas Branch","icon":"map-marker-alt"},{"level":"District","icon":"map-marked-alt"},{"level":"Group","icon":"users"},{"level":"Section","icon":"user-friends"} ]'

constructor(private navi: OnsNavigator,
            private _params: Params,
            private globals: Globals,) {
  } 


  ngOnInit() {
     
     
      if (this._params.data) {this.displayuser=this._params.data.data[0]; this.displayrole=this._params.data.roleid}    
     

  }
  
}