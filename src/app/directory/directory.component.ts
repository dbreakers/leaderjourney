import { Component, OnInit } from '@angular/core';
import { OnsNavigator,  Params, } from 'ngx-onsenui';
import { Globals } from '../globals';
import { AddressCardComponent } from '../addresscard/addresscard.component'; 
import { CallNetworkService } from '../callnetwork.service';
import * as ons from 'onsenui';
@Component({
  selector: 'ons-page[directory]',
  templateUrl: './directory.component.html',
  styleUrls: [ './directory.component.css' ]
})
export class DirectoryComponent implements OnInit {

namefilter = "";
modal1 = ""
modal2 = ""

  constructor(private navi: OnsNavigator,
              private _params: Params,
               private callnetworkService: CallNetworkService, 
              private globals: Globals,) {
  } 

searchObj(member) {
var search_strings = this.namefilter.split(" ");
var finditem = true;
  for (var i=0; i<search_strings.length;i++){
    if (member.name.toUpperCase().indexOf(search_strings[i].toUpperCase())==-1) {
     finditem = false;
    }
  }
return finditem
}  

goto_card2(u) {
this.navi.nativeElement.pushPage(AddressCardComponent,{data: {data: u[0] , roleid: this.globals.compassuser[0].roles[0].roleid}});
 directory_modal.hide()
}

goto_card(id) {
  this.modal1 = "Getting data"
  this.modal2 = ""
 directory_modal.show()
this.callnetworkService.getRoleUserAddress(this.globals.roleid,id).subscribe(user=> this.goto_card2(user));
}

update_search($event) {
  for (var i = 0; i < this.globals.last_directory[0].length; i++) {
      var v = document.getElementById(this.globals.last_directory[0][i].contact_number);

      if (this.searchObj(this.globals.last_directory[0][i])) {
       
         v.classList.add("show"); 
        v.classList.remove("hidden");
        
      } else
      {
        v.classList.remove("show"); 
        v.classList.add("hidden");
      }
        
      
    }
 
  }

 

ngOnInit() {
menu_modal.show()
document.addEventListener('init', function(event) {menu_modal.hide()}, false);
  }
}