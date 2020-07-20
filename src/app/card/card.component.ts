import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[mandatory]',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {
yellowcard='[{"type": "mh","text": "Young people first"},{"type": "sh","text": "Safeguarding – a code of practice"},{"type": "tx","text": "This card contains essential information for all adults in Scouting. Please keep it with you at all times."},{"type": "tx", "text":"This card contains essential information for all adults in Scouting. Please keep it with you at all times."},{"type": "tx", "text":"Version 7. Nov 2018"},{"type": "bx", "text":"It is the policy of the Scouts to safeguard the welfare of all young people by protecting them from neglect and from physical, sexual and emotional harm. All members have a duty to report concerns or suspicions and a right to do so in confidence and free from harassment"}]'
greencard='[{"type": "mh","text": "Alcohol"},{"type": "sh","text": "Safeguarding – a code of practice"},{"type": "tx","text": "This card contains essential information for all adults in Scouting. Please keep it with you at all times."},{"type": "tx", "text":"This card contains essential information for all adults in Scouting. Please keep it with you at all times."},{"type": "tx", "text":"Version 7. Nov 2018"},{"type": "bx", "text":"It is the policy of the Scouts to safeguard the welfare of all young people by protecting them from neglect and from physical, sexual and emotional harm. All members have a duty to report concerns or suspicions and a right to do so in confidence and free from harassment"}]'
cardl = {}
color="y"

do_alcohol() {
  this.cardl = JSON.parse(this.greencard);
  this.color = "g"
}
do_sg() {
  this.cardl = JSON.parse(this.yellowcard);
  this.color = "y"
}
  ngOnInit() {
   this.cardl = JSON.parse(this.yellowcard);
   this.color = "y"
  }
} 