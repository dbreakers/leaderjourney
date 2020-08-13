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
import { MandatoryComponent } from '../mandatory/mandatory.component';

@Component({
  selector: 'app-mandatoryheader',
  templateUrl: './mandatoryheader.component.html',
  styleUrls: ['./mandatoryheader.component.css']
})
export class MandatoryHeaderComponent implements OnInit {
  //@Input() ;
  @Input() user: Any;
  fa = "";
  sf = "";
  sg = "";
  gd = "";
  highman = false;  
constructor( private globals: Globals, private navi: OnsNavigator,) {}

  push2() {
   
    if (this.user.click) {
    this.navi.nativeElement.pushPage(MandatoryComponent);
    }
  }

calc_date_value(d) { 
    return (parseInt(d.substring(0,4)))*12 +parseInt(d.substring(5,7))-1;
}

compass_date(longdate) {
  if (longdate.split(" ").length<3) { return ""}
  return longdate.split(" ")[2]+"-"+
                    (this.globals.months.indexOf( longdate.split(" ")[1])+1)
                    + "-" +longdate.split(" ")[0];
}

find_gdpr() { 
  // For GDPR we need to look at all roles  
  var expiry="1900-01-01"
  for(var i=0; i< this.user.user[0].roles.length; i++){
    var role = this.user.user[0].roles[i].roleid;
    for(var j=0; j< this.user.user[0].training[role].length; j++){ 
      var plp =  this.user.user[0].training[role][j]

      if (plp.courseid=="GDPR"&&this.compass_date(plp.validated_on)>expiry) {
        expiry = this.compass_date(plp.validated_on);
      }
    }
  }
   if(expiry!="1900-01-01") {return 'ok'} else {return 'od'} 
  
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
    var data = this.user.user[0].mandatory;
    var expiry="1900-01-01"
    for(var i=0;i<data.length; i++){
      var expires = this.compass_date(data[i].expires)
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
  this.sf = this.find_mandatory ("SA")
  this.sg = this.find_mandatory ("SG")
  this.gd = this.find_gdpr(); 
   if (this.fa!="ok"||this.sg!="ok"||this.sf!="ok"||this.gd!="ok"){
    this.highman = true;
  }
  }

}

