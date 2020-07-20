import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
//import { RoleSelectComponent } from '../roleselect/roleselect.component';

@Component({
  selector: 'ons-page[mandatory]',
  templateUrl: './mandatory.component.html',
  styleUrls: [ './mandatory.component.css' ]
})
export class MandatoryComponent implements OnInit {
  selected_role = {};
  plp = [];
  mandlist = [];
  fa = "";
  sf = "";
  sg = "";
  gd = "";
  highman = false;
  
  constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  } 
 
  
  
  push() {
 //   this.navi.nativeElement.pushPage(TrainingComponent);
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

  return_mandatory (mantype,status) {
    var expiry="1900-01-01"
    var entry = {}
    for(var i=0;i<this.globals.compassdata.object.mandate.length; i++){
      var item = this.globals.compassdata.object.mandate[i];
      if(item.expiry>expiry&&item.mandCode==mantype) {
         expiry = item.expiry;
         entry = this.globals.compassdata.object.mandate[i];
      }
    } 
    if (status=='od') {entry.status = 1}
    if (status=='du') {entry.status = 2}
    if (status=='ok') {entry.status = 3}
    if (entry.mandCode=="FA"){entry.linkedModuleLabel = "First Aid"}
    if (entry.mandCode=="SG"){entry.linkedModuleLabel = "Safeguarding"}
    if (entry.mandCode=="SA"){entry.linkedModuleLabel = "Safety"}
    return entry
  }

  find_mandatory (mantype) {
    var expiry="1900-01-01"
    for(var i=0;i<this.globals.compassdata.object.mandate.length; i++){
      var item = this.globals.compassdata.object.mandate[i];
      if(item.expiry>expiry&&item.mandCode==mantype) {
         expiry = item.expiry;
      }
    } 
    return expiry;
  }

  calc_date_value(d) {
    return (parseInt(d.substring(0,4)))*12 +parseInt(d.substring(5,7))-1;
  }

  check_expiry(date,expiry){
    if (expiry < date) {
    return "od"; 
  }  
  if (this.calc_date_value(expiry)-this.calc_date_value(date)<3) { 
    return "du"
  }
  return "ok"
  }

  check_expiry_gdpr(date,expiry){

    if (this.calc_date_value(date)-this.calc_date_value(expiry)>36) {
    return "od"; 
  }  
  if  (this.calc_date_value(date)-this.calc_date_value(expiry)>32) { 
    return "du"
  }
  return "ok"
  }


  find_gdpr() {
  // For GDPR we need to look at all roles  
  var expiry="1900-01-01"
  for(var i=0; i< this.globals.compassdata.object.roles.length; i++){
    var role = this.globals.compassdata.object.roles[i].id;
    for(var j=0; j< this.globals.compassdata.object.plps[role].length; j++){ 
      var plp =  this.globals.compassdata.object.plps[role][j]
      if (plp.code=="GDPR"&&plp.validatedDate>expiry) {
        expiry = plp.validatedDate;
      }
    }
  }
  console.log(expiry)
  return expiry
  }

 compare(a, b) {
  // Use toUpperCase() to ignore character casing

  let comparison = 0;
  if (a.status > b.status) {
    comparison = 1;
  } else if (a.status < b.status) {
    comparison = -1;
  }
  return comparison;
}

  get_mandatory(){
  this.highman = false;
  var date = this.formatDate()
  var expiry = this.find_mandatory("FA");
  this.fa = this.check_expiry(date,expiry)
  this.mandlist.push(this.return_mandatory("FA",this.fa))
  expiry = this.find_mandatory("SA");
  this.sf =  this.check_expiry(date,expiry)
   this.mandlist.push(this.return_mandatory("SA",this.sf))
  expiry = this.find_mandatory("SG");
  this.sg =  this.check_expiry(date,expiry);
   this.mandlist.push(this.return_mandatory("SG",this.sg))
  expiry = this.find_gdpr();
  this.gd = this.check_expiry_gdpr(date,expiry);  
  if (this.fa!="ok"||this.sg!="ok"||this.sf!="ok"||this.gd!="ok"){
    this.highman = true;
  }
  this.mandlist.sort(this.compare)
  }
  
  ngOnInit() {
this.selected_role = this.globals.compassdata.object.roles.find(r=>r.id == this.globals.roleid )
this.plp = this.globals.compassdata.object.plps[this.globals.roleid];
this.get_mandatory() 
 
  }
}