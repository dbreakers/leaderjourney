import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[permits]',
  templateUrl: './permits.component.html',
  styleUrls: [ './permits.component.css' ]
})
export class PermitsComponent implements OnInit {

selected_role = {}; 
permits = {}
outer = []
  constructor(private navi: OnsNavigator,
              private globals: Globals,) {
  }
permit_icons='[{"name":"Archery","icon":"bullseye"},{"name":"Boating","icon":"anchor"},{"name":"Canoeing","icon":"anchor"},{"name":"Caving","icon":"hard-hat"},{"name":"Climbing and Abseiling","icon":""},{"name":"Dinghy Sailing","icon":"anchor"},{"name":"Boating","icon":"anchor"},{"name":"Hill Walking","icon":"hiking"},{"name":"Hovercrafting","icon":"water"},{"name":"Ice Climbing","icon":"snowflake"},{"name":"Kayaking","icon":"anchor"},{"name":"Keelboating","icon":"anchor"},{"name":"Kite Surfing","icon":"water"},{"name":"Mine Exploration","icon":"hard-hat"},{"name":"Motor Cruising","icon":"ship"},{"name":"Mountain Biking","icon":"biking"},{"name":"Narrow Boating","icon":"ship"},{"name":"Nights Away","icon":"campground"},{"name":"Personal Watercraft (Jet Ski)","icon":"anchor"},{"name":"Power Boating","icon":"anchor"},{"name":"Pulling","icon":"anchor"},{"name":"Rafting (Traditional)","icon":"anchor"},{"name":"Rowing and Sculling","icon":"anchor"},{"name":"Scuba Diving","icon":"anchor"},{"name":"Skiing","icon":"skiing"},{"name":"Snorkelling","icon":"water"},{"name":"Snowboarding","icon":"snowboarding"},{"name":"Snowsports","icon":"snowflake"},{"name":"Water Skiing","icon":"water"},{"name":"White Water Rafting","icon":"water"},{"name":"Windsurfing","icon":"anchor"},{"name":"Yachting","icon":"anchor"}]'

permit_array =[]


ngOnInit() {
this.selected_role = this.globals.compassar[0].find(r=>r.roleid == this.globals.roleid )
this.permit_array = JSON.parse(this.permit_icons)
this.permits = this.globals.compassuser[0]['permits'];
if(!this.permits.hasOwnProperty("icon")){
  for(var i=0;i<this.permits.length;i++){
    this.permits[i]['icon'] =this.permit_array.find(j=> j.name== this.permits[i].activity).icon
  } 
}
this.outer = ["V","E"]
 
  }
}