//import { Component } from '@angular/core';
//import { OnsNavigator } from 'ngx-onsenui';
import { RoleSelectComponent } from '../roleselect/roleselect.component';
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
export class LogonPageComponent {
  error_text= "";

  constructor(private navi: OnsNavigator,
              private callnetworkService: CallNetworkService, 
              private globals: Globals) {
  } 

   validate2(user,password) {
 if (password=="") {return false} 
 if ( user=="") {return false}
 if (password.length<9) { return false}
  return true
  }

  validate(email,password) {
    return ""
  }
post_logon(test){
//console.log(test);
if (test.message == "Success"){
   this.error_text="";
   this.globals.compassdata=test;
   this.navi.nativeElement.replacePage(RoleSelectComponent);
} else {
    this.error_text="Logon Failed - Check Password and ID"
}
}  
logon(username2,password2) {
 this.callnetworkService.doLogon(username2,password2).subscribe(Security=> this.post_logon(Security));
}
  
}