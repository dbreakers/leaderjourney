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
export class LogonPageComponent {
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
post_logon(test){
//console.log(test);
if (test.message == "Success"){
   this.error_text="";
   this.globals.compassdata=test;
   this.navi.nativeElement.pushPage(RoleSelectComponent);
} else {
    this.error_text="Logon Failed - Check Password and ID"
}
}  
logon(username2,password2) {
  this.globals.url = document.getElementById('u').value; 
 this.callnetworkService.doLogon(username2,password2).subscribe(Security=> this.post_logon(Security));
}
  
}