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

import { Input } from '@angular/core';
import { Globals } from '../globals';
import { Role } from '../role';

@Component({
  selector: 'app-mandatoryheader',
  templateUrl: './mandatoryheader.component.html',
  styleUrls: ['./mandatoryheader.component.css']
})
export class MandatoryHeaderComponent implements OnInit {
  //@Input() ;
  fa = "";
  sf = "";
  sg = "";
  gd = "";
  highman = false;  
constructor( private globals: Globals) {}

calc_date_value(d) {
    return (parseInt(d.substring(0,4)))*12 +parseInt(d.substring(5,7))-1;
 }

formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

find_mandatory (mantype) {
    var data = this.globals.compassuser[0].mandatory;
    var expiry="1900-01-01"
    for(var i=0;i<data.length; i++){
      var expires = data[i].expires.split(" ")[2]+"-"+
                    (this.globals.months.indexOf( data[i].expires.split(" ")[1])+1)
                    + "-" +data[i].expires.split(" ")[0];
      if(expires > expiry&&data[i].type==mantype) {
        expiry = expires;
      }
    } 
    // We need to consider Module 1 and Module 1EX here for SA and SF
    if(expiry=="1900-01-01") {
      
    }  
    if(expiry=="1900-01-01") {expiry=""}
     var date = this.formatDate()
    if (expiry < date) {
    return "od"; 
  }  
  if (this.calc_date_value(expiry)-this.calc_date_value(date)<3) { 
    return "du"
  }
  return "ok"
  }
    
   
  ngOnInit() {
  this.highman = false;
  this.fa = this.find_mandatory ("FA")
  }

}

