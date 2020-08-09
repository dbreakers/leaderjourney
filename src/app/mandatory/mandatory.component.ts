import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 
@Component({
  selector: 'ons-page[mandatory]',
  templateUrl: './mandatory.component.html',
  styleUrls: [ './mandatory.component.css' ]
})
export class MandatoryComponent implements OnInit {
  selected_role = {};
  plp = [];
  mandlist = [];
   
   
  constructor(private navi: OnsNavigator, 
              private globals: Globals,) {
  } 
 
  
  
  push() {
 //   this.navi.nativeElement.pushPage(TrainingComponent);
  }
  
compass_date(longdate) {
  if (longdate.split(" ").length<3) { return ""}
  return longdate.split(" ")[2]+"-"+
                    (this.globals.months.indexOf( longdate.split(" ")[1])+1)
                    + "-" +longdate.split(" ")[0];
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
     var data = this.globals.compassuser[0].mandatory;
    for(var i=0;i<data.length; i++){
      var item =data[i];
      var expires = this.compass_date(data[i].expires)
      if(expires>expiry&&item.type==mantype) {
         expiry = expires;
         entry = data[i];
         entry.expired = expires;
      }
    } 
    if (!entry.hasOwnProperty("mandC")) {
      entry.expiry = ""; 
      entry.mandCode = mantype;
    }
    var date = this.formatDate()
    status =  "ok"
      
    if (this.calc_date_value(entry.expired)-this.calc_date_value(date)<3) { 
    status = "du"
  }
  if (entry.expired < date) {
    status= "od"; 
    }
  
    if (status=='od') {entry.status = 1}
    if (status=='du') {entry.status = 2}
    if (status=='ok') {entry.status = 3}
    if (entry.type=="FA"){entry.linkedModuleLabel = "First Aid"}
    if (entry.type=="SG"){entry.linkedModuleLabel = "Safeguarding"}
    if (entry.type=="SA"){entry.linkedModuleLabel = "Safety"}
    entry.monthnumber = parseInt(entry.expired.substring(5,7));
    return entry;
  }

  calc_date_value(d) {
    return (parseInt(d.substring(0,4)))*12 +parseInt(d.substring(5,7))-1;
  }
  make_date_value(d) {
    var year = Math.floor(d/12); 
    var month = 1 + d-(year*12)
    return (year+"-"+month+"-01")
  }
 
 
  

  find_gdpr() {
  // For GDPR we need to look at all roles  
  //debugger;  
  var expiry="1900-01-01"
  var gdpr = {}
  for(var i=0; i< this.globals.compassuser[0].roles.length; i++){
    var role = this.globals.compassuser[0].roles[i].roleid;
    for(var j=0; j< this.globals.compassuser[0].training[role].length; j++){ 
      var plp =  this.globals.compassuser[0].training[role][j]
     //console.log(plp.courseid,expiry, this.compass_date(plp.validated_on),this.compass_date(plp.validated_on)>expiry)
    // console.log(plp)
      if (plp.courseid=="GDPR"&&this.compass_date(plp.validated_on)>expiry) {
           var gdpr = plp;
           gdpr.status = 3
          //  console.log(gdpr)
          gdpr.expired =  "";
          var expiry = this.compass_date(plp.validated_on);
           gdpr.linkedModuleCode = "GDPR";
        gdpr.mandCode = "GDPR"
        gdpr.linkedModuleLabel = "GDPR Training";
     
      }
    }
  }
  
  if(expiry=="1900-01-01") { 
    return {"expired":"","linkedModuleCode" : "GDPR","linkedModuleLabel" : "GDPR Training","status":1, "mandCode":"GDPR"}
    } else {return gdpr} 
  return gdpr; 
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
 //var expiry = this.find_gdpr();
 this.mandlist.push(this.find_gdpr())
this.mandlist.push(this.return_mandatory("FA",this.fa))
this.mandlist.push(this.return_mandatory("SA",this.fa))
this.mandlist.push(this.return_mandatory("SG",this.fa)) 
 this.mandlist.sort(this.compare)
}
   
  
  ngOnInit() {
this.selected_role = this.globals.compassar[0].find(r=>r.roleid == this.globals.roleid )
//this.plp = this.globals.compassdata.object.plps[this.globals.roleid];
this.get_mandatory() 
 
  }
}