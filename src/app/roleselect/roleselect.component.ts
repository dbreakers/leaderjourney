import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { Globals } from '../globals';
import { MenuComponent } from '../menu/menu.component';
import { CallNetworkService } from '../callnetwork.service';

@Component({
  selector: 'ons-page[roleselect]',
  templateUrl: './roleselect.component.html',
  styleUrls: [ './roleselect.component.css' ]

})
export class RoleSelectComponent implements OnInit{

rolelist = []

  constructor(
    private navi: OnsNavigator,
    private globals: Globals,
     private callnetworkService: CallNetworkService, 
    private params: Params) {
  }
  
  pop() {
   // this.navi.nativeElement.popPage();
  }
  get_all() {
 //   this.globals.compassar =ret;
//    modal2.hide(); 
    this.navi.nativeElement.pushPage(MenuComponent);
  } 

  select_role(role) {
    this.globals.roleid = role.roleid;
   //  modal2.show() ;   
     this.get_all();
   //  if (this.globals.compassar=="") {
   //  this.callnetworkService.getAllRoles().subscribe(ar=> this.get_all(ar));
   //  } else {this.get_all(this.globals.compassar)}
   // this.navi.nativeElement.pushPage(MenuComponent);
   //   this.navi.nativeElement.replacePage(MenuComponent);
  } 
ngOnInit() {
  for(var i=0; i<this.globals.compassuser[0].droles.length;i++){
    this.rolelist.push(this.globals.compassuser[0].roles.find(role=>role.roleid==this.globals.compassuser[0].droles[i]))
  }
  
}

  
}
