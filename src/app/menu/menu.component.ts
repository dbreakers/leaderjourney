import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Papa } from 'ngx-papaparse';
import { Globals } from '../globals';
//import { RoleSelectComponent } from '../roleselect/roleselect.component';
import { DirectoryComponent } from '../directory/directory.component';
import { TrainingCComponent } from '../trainingc/trainingc.component';
import { MandatoryComponent } from '../mandatory/mandatory.component';
import { CardComponent } from '../card/card.component';
import { PermitsComponent } from '../permits/permits.component';
import { AddressCardComponent } from '../addresscard/addresscard.component';
import { HierComponent } from '../hier/hier.component';
import { CallNetworkService } from '../callnetwork.service';
import { LocalStorageService } from '../localstorage.service';

@Component({
  selector: 'ons-page[menu]',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit {
  selected_role = {};
  modal1=""
  modal2=""
  bookmarks=[];
  
  constructor(private navi: OnsNavigator,
              private papa: Papa,
               private ls: LocalStorageService,
              private callnetworkService: CallNetworkService, 
              private globals: Globals,) {
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
    // this.globals.compasshier = this.globals.compassdata[0].hierarchy;
    this.navi.nativeElement.pushPage(HierComponent);
  }
push6() {
 this.navi.nativeElement.pushPage(TrainingCComponent,{data: {data: this.globals.compassuser, roleid: this.globals.compassuser[0].roles[0].roleid}});
}

push7_2(u) {
 this.globals.last_read = u 

 this.navi.nativeElement.pushPage(TrainingCComponent,{data: {data: u, roleid: this.globals.compassuser[0].roles[0].roleid}});
    menu_modal.hide()
}  

push7(uid) {
  this.modal1 = "Getting data"
  this.modal2 = ""
  menu_modal.show()
 // if (this.globals.last_read.length==0) {
  this.callnetworkService.getRoleUser(this.globals.roleid,uid).subscribe(user=> this.push7_2(user));
 // } else 
 // {
 //   this.push7_2(this.globals.last_read)
 // }
}

push8_2(ul) {
 this.globals.last_directory = ul 
   
 this.navi.nativeElement.pushPage(DirectoryComponent,{data: {data: ul, roleid: this.globals.compassuser[0].roles[0].roleid}});
 menu_modal.hide()
}  

push8() {
  this.modal1 = "Getting User List"
  this.modal2 = ""
  menu_modal.show()
  if (this.globals.last_directory.length==0) {
  this.callnetworkService.getRoleUsers(this.globals.roleid).subscribe(user=> this.push8_2(user));} else 
  {
    this.push8_2(this.globals.last_directory)
  }
}
  
push9() {
    this.navi.nativeElement.pushPage(AddressCardComponent,{data: {data: this.globals.compassuser[0] , roleid: this.globals.compassuser[0].roles[0].roleid}});
 }

push10_2(r) {
console.log(this.papa.parse(r[0]))
}

push10() {
 this.callnetworkService.getReport(this.globals.roleid,5).subscribe(report=> this.push10_2(report));
}   
 


  



  get_role() {
    return this.selected_role = this.globals.compassuser[0].rolss.find(r=>r.roleid == this.globals.roleid )
  }

  get_user(user){ 
    this.globals.compassuser  = user;
  }

  delete_bookmark(u) {
    this.ls.remove_person(u);
    this.bookmarks = this.ls.get_people();
  }

  refreshbm() {
     this.bookmarks = this.ls.get_people();
  }
  
  addbm() {
    this.push8()
    this.bookmarks = this.ls.get_people();
  }
  ngOnInit() {
this.selected_role = this.globals.compassuser[0].roles.find(r=>r.roleid == this.globals.roleid )
if (this.globals.compassuser.length==0){
   this.callnetworkService.getUser().subscribe(user=> this.get_user(user));
}
this.bookmarks = this.ls.get_people();
//this.plp = this.globals.compassdata.object.plps[this.globals.roleid];
//this.get_mandatory() 
//document.addEventListener('init', function(event) {menu_modal.hide()}, false);
  }
}