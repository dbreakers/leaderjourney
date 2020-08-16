//import { Component } from '@angular/core';
//import { OnsNavigator } from 'ngx-onsenui';
import { RoleSelectComponent } from '../roleselect/roleselect.component';
import { CardComponent } from '../card/card.component';
import { Globals } from '../globals';
import { CallNetworkService } from '../callnetwork.service';
 
import {
  Component,
  Injector,
  ViewChild,
  ModalFactory,
  Params,
  OnInit,
  OnsSplitterSide,
  OnsNavigator,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

@Component({
  selector: 'ons-page[logonpage]',
  templateUrl: './logonpage.component.html',
  styleUrls: [ './logonpage.component.css' ]
})
export class LogonPageComponent implements OnInit {
  error_text= "";
 
  constructor(private navi: OnsNavigator,  
              private callnetworkService: CallNetworkService, 
              private globals: Globals) {
  } 

   validate2(user,password) {
 if (password=="") {return false} 
 if ( user=="") {return false}
 //if (password.length<9) { return false}
  return true
  }

  validate(email,password) {
    return ""
  }
  show_cards() {
    this.navi.nativeElement.pushPage(CardComponent);
  }

get_roles(test) {
  this.globals.compassuser = test;
  modald.hide()
   this.navi.nativeElement.pushPage(RoleSelectComponent);
}
post_logon(test){
//console.log(test);
if (test[0] == 0){
   this.error_text="";
   modal.hide();
   modald.show()
   this.callnetworkService.getUser().subscribe(Roles=> this.get_roles(Roles));
  
} else {
    this.error_text="Logon Failed - Check Password and ID"
    this.globals.compass_user = "";
    this.globals.compass_password = "";
      modal.hide();
}
}  
logon(username2,password2) {
//  this.globals.url = document.getElementById('u').value;
this.callnetworkService.clear();
this.globals.compass_user = username2;
this.globals.compass_password = password2;
  modal.show();  
 this.callnetworkService.doLogon(username2,password2).subscribe(Security=> this.post_logon(Security));
}

ngOnInit () {
  modal.hide();
  this.globals.compass_user = "";
  this.globals.compass_password = "";
   //  var myapp = angular.module('myapp', ['angular-datepicker']);
     
}
  
}