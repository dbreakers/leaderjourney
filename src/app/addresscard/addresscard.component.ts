import { Component, ViewChild, OnInit} from '@angular/core';
import { OnsNavigator,  Params, } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[addresscard]',
  templateUrl: './addresscard.component.html',
  styleUrls: [ './addresscard.component.css' ]
})
export class AddressCardComponent implements OnInit {
  
  displayrole = {};
  displayuser = []; 

constructor(private navi: OnsNavigator,
              private _params: Params,
              private globals: Globals,) {} 

ngOnInit() {
   
   if (this._params.data) {this.displayuser=this._params.data.data; this.displayrole=this._params.data.roleid} 
}   
}