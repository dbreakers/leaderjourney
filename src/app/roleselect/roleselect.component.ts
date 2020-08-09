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

  constructor(
    private navi: OnsNavigator,
    private globals: Globals,
     private callnetworkService: CallNetworkService, 
    private params: Params) {
  }
  
  pop() {
   // this.navi.nativeElement.popPage();
  }
  get_all(ret) {
    this.globals.compassar =ret;
    this.navi.nativeElement.pushPage(MenuComponent);
       modal2.hide(); 
  } 

  select_role(role) {
    this.globals.roleid = role.roleid;
     this.callnetworkService.getAllRoles().subscribe(ar=> this.get_all(ar));
    this.navi.nativeElement.pushPage(MenuComponent);
       modal2.show(); 
   //   this.navi.nativeElement.replacePage(MenuComponent);
  } 
ngOnInit() {
  if (this.globals.compassdata.length ==0){
   modal2.show(); 
  }
}

  
}
