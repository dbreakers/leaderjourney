import { Component, OnInit } from '@angular/core';
import { OnsNavigator,  Params, } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[training2]',
  templateUrl: './training2.component.html',
  styleUrls: [ './training2.component.css' ]
})
export class Training2Component implements OnInit {
  selected_role = {};
  displayuser = []; 
  displayrole = ''
  plp = [];
  percent = 0;
  targetmonth = "";
  targetyear = 0;
  count = 0;
  width = 0;
  status = "";
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

  mandatory_find() {
  this.count = 0;  
  for (var i=0; i<this.plp.length; i++) {
    if (this.plp[i].validated_on!="") {this.count++}
  }
  this.percent = Math.floor( 100 * this.count / this.plp.length);
  this.width = Math.floor( 90 * this.count / this.plp.length);
  this.status = "ok";
  var nowsum = 0
  var utc = new Date(this.compass_date(this.selected_role.start)).toUTCString();
  this.targetyear = parseInt(this.compass_date(this.selected_role.start).substring(0,4));
   this.targetyear = this.targetyear + 3; 
  this.targetmonth = this.globals.months[parseInt(this.compass_date(this.selected_role.start).substring(5,7))-1];  
  this.status = "ok";
  if ((this.targetyear<(new Date()).getFullYear())){
    this.status = "od";
  }

  if (this.targetyear==(new Date()).getFullYear()&&parseInt(this.compass_date(this.selected_role.start).substring(5,7))-1<(new Date()).getMonth())
  {
    this.status = "od";
  }
  var nowsum = (new Date()).getFullYear() * 12 + (new Date()).getMonth();
  var targetsum = this.targetyear * 12 + parseInt(this.compass_date(this.selected_role.start).substring(5,7))-1;
  if ((nowsum-targetsum)<4) {this.status="du"}
  if (this.percent==100) {this.status="ok"} 
   }
  

  push() {
    //this.navi.nativeElement.pushPage(RoleSelectComponent);
  }
  
ngOnInit() {
 if (this._params.data) {this.displayuser=this._params.data.data; this.displayrole=this._params.data.roleid}    
this.selected_role = this.displayuser[0].roles.find(r=>r.roleid == this.displayrole )
this.plp = this.displayuser[0].training[this.displayrole];
this.mandatory_find();
 
  }
}