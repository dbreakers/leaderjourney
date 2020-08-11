import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
//import { RoleSelectComponent } from '../roleselect/roleselect.component';
import { TrainingComponent } from '../training/training.component';
import { TrainingCComponent } from '../trainingc/trainingc.component';
import { MandatoryComponent } from '../mandatory/mandatory.component';
import { CardComponent } from '../card/card.component';
import { PermitsComponent } from '../permits/permits.component';
import { HierComponent } from '../hier/hier.component';
import { CallNetworkService } from '../callnetwork.service';

@Component({
  selector: 'ons-page[menu]',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit {
  selected_role = {};
  
  constructor(private navi: OnsNavigator,
              private callnetworkService: CallNetworkService, 
              private globals: Globals,) {
  } 
 
  
  push() {
    this.navi.nativeElement.pushPage(TrainingComponent,{data: {data: this.globals.compassuser, roleid: this.globals.compassuser[0].roles[0].roleid}});
  }  
   push2() {
    this.navi.nativeElement.pushPage(MandatoryComponent);
  }
     push3() {
    this.navi.nativeElement.pushPage(CardComponent);
  }
    push4() {
    this.navi.nativeElement.pushPage(PermitsComponent);
  }
  push5() {
    this.navi.nativeElement.pushPage(HierComponent);
  }
push6() {
 this.navi.nativeElement.pushPage(TrainingCComponent);
}
  

  

   
 


  



  get_role() {
    return this.selected_role = this.globals.compassuser[0].rolss.find(r=>r.roleid == this.globals.roleid )
  }

  get_user(user){ 
    this.globals.compassuser  = user;
  }
  
  ngOnInit() {
this.selected_role = this.globals.compassuser[0].roles.find(r=>r.roleid == this.globals.roleid )
if (this.globals.compassuser.length==0){
   this.callnetworkService.getUser().subscribe(user=> this.get_user(user));
}
//this.plp = this.globals.compassdata.object.plps[this.globals.roleid];
//this.get_mandatory() 
  
  }
}