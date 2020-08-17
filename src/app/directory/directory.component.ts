import { Component, OnInit } from '@angular/core';
import { OnsNavigator,  Params, } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[directory]',
  templateUrl: './directory.component.html',
  styleUrls: [ './directory.component.css' ]
})
export class DirectoryComponent implements OnInit {

namefilter = "";

  constructor(private navi: OnsNavigator,
              private _params: Params,
              private globals: Globals,) {
  } 

searchObj(member) {
var search_strings = this.namefilter.split(" ");
var finditem = true;
  for (var i=0; i<search_strings.length;i++){
    if (member.name.indexOf(search_strings[i])==-1) {
     finditem = false;
    }
  }
return finditem
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
  
  }
}