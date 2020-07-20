import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
//import { RoleSelectComponent } from '../roleselect/roleselect.component';
import { TrainingComponent } from '../training/training.component';

@Component({
  selector: 'ons-page[menu]',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit {
  selected_role = {};
  plp = [];
  fa = "";
  sf = "";
  sg = "";
  gd = "";
  
  constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  } 
 
  
  
  push() {
    this.navi.nativeElement.pushPage(TrainingComponent);
  }
  
 formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  find_mandatory (mantype) {
    var expiry="1900-01-01"
    for(var i=0;i<this.globals.compassdata.object.mandate.length; i++){
      var item = this.globals.compassdata.object.mandate[i];
      if(item.expiry>expiry&&item.mandCode==mantype) {
         expiry = item.expiry;
      }
    } 
    return expiry;
  }

  get_mandatory(){
  var date = this.formatDate("")
  var expiry = this.find_mandatory("FA");
  if (expiry < date) {
    this.fa = "od"; 
  }   
  }
  
  ngOnInit() {
this.selected_role = this.globals.compassdata.object.roles.find(r=>r.id == this.globals.roleid )
this.plp = this.globals.compassdata.object.plps[this.globals.roleid];
this.get_mandatory() 
 
  }
}