import { Component, OnInit, ViewChild } from '@angular/core';
import { OnsNavigator,  Params } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[status]',
  templateUrl: './status.component.html',
  styleUrls: [ './status.component.css' ]
})
export class StatusComponent implements OnInit {
  displayuser = {}
  displayrole=""
  

constructor(private navi: OnsNavigator,
            private _params: Params,
            private globals: Globals,) {
  } 

  compass_date(longdate) {
  if (longdate.split(" ").length<3) { return ""}
  return longdate.split(" ")[2]+"-"+
                    (this.globals.months.indexOf( longdate.split(" ")[1])+1)
                    + "-" +longdate.split(" ")[0];
  }


  ngOnInit() {
     
     
      if (this._params.data) {this.displayuser=this._params.data.data[0]; this.displayrole=this._params.data.roleid}    
         


  }
  
}