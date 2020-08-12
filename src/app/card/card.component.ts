import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[mandatory]',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {

testcards= '{"yellowcard":[{"type": "mh","text": "Young people first"},{"type": "sh","text": "Safeguarding – a code of practice"},{"type": "tx","text": "This card contains essential information for all adults in Scouting. Please keep it with you at all times."},{"type": "bd", "text":"Version 7. Nov 2018"},{"type": "bx", "text":"It is the policy of the Scouts to safeguard the welfare of all young people by protecting them from neglect and from physical, sexual and emotional harm. All members have a duty to report concerns or suspicions and a right to do so in confidence and free from harassment"},{"type":"sh","text":"Code of behaviour"},{"type":"do","text":"remember that you are a role model at ALL times, inside and outside Scouting. Set a good example for others to follow."},{"type":"do","text":"treat all young people equally - do not show favouritism"},{"type":"do","text":"follow the adult-to-young person ratios at all times "},{"type":"do","text":"remember that you have been placed in a position of trust - do not abuse this"},{"type":"do","text":"report all allegations, suspicions and concerns immediately"},{"type":"do","text":"remember that someone may misinterpret your actions"},{"type":"do","text":"respect a young person’s right to personal privacy"},{"type":"do","text":"act within appropriate boundaries, even in difficult circumstances"},{"type":"do","text":"encourage an open and transparent culture, where people can challenge inappropriate attitudes or behaviours"},{"type":"do","text":"make everyone (young people, parents and carers, Young Leaders and other helpers) aware of our safeguarding arrangements and share our Yellow Card - our Code of Behaviour "} ,{"type":"do","text":"have separate sleeping accommodation for young people, adults and Young Leaders working with a younger section"},{"type":"do","text":"plan activities that involve more than one other person being present, or at least within sight and hearing of others. Do not plan to be alone with a young person."},{"type":"dn","text":"drink alcohol when you are directly responsible for young people and never allow young people on Scouting activities to drink alcohol"},{"type":"dn","text":" trivialise abuse or let it go unreported"},{"type":"dn","text":"join in physical contact games with young people"},{"type":"dn","text":"overstep the boundaries between yourself and young people by engaging in friendships or sexual relationships"},{"type":"dn","text":"allow activities that encourage bullying behaviour including initiation ceremonies, dares or forfeits "},{"type":"dn","text":"use inappropriate, suggestive or threatening language, whether verbal, written or online"},{"type":"dn","text":"rely on your reputation or position to protect you"},{"type":"sh", "text":"What do I do if…?"},{"type":"bd", "text":"If a young person tells you they are being abused, you must:"},{"type":"tx","text":"1. Allow them to speak without interruption, and accept what they say"},{"type":"tx","text":"2. Be understanding and reassuring – do not give your opinion"},{"type":"tx","text":"3. Tell them you will try to help but must pass the information on"},{"type":"tx","text":"4. Tell your Group Scout Leader or District Commissioner immediately"},{"type":"tx","text":"5. Write careful notes of what was said using the actual words"},{"type":"tx","text":"6. Include the time and date and full names of those involved"},{"type":"tx","text":"7. Sign and pass your notes to your Group Scout Leader or District Commissioner"},{"type":"tx","text":"8. Make sure that Scouting poses no further risk to their welfare"},{"type":"bd","text":"If you are concerned about the welfare of a young person or there is a concern, complaint or allegation about an adult or yourself, inside or outside Scouting, you must:"},{"type":"tx","text":"1. Tell your Group Scout Leader or District Commissioner immediately"},{"type":"tx","text":"2. Write careful notes of what you witnessed, heard or were told"},{"type":"tx","text":"3. Include the time and date and full names of those involved"},{"type":"tx","text":"4. Sign and pass your notes to your Group Scout Leader or District Commissioner"},{"type":"tx","text":"5. Make sure that Scouting poses no further risk to their welfare"},{"type":"bd","text":"It is your duty to report ALL safeguarding concerns as a matter of urgency following the correct process."},{"type":"bx","text":"If a young person is at immediate risk of significant harm call 999 and request Police. Inform your Group Scout Leader or District Commissioner once you have done this."},{"type":"bd","text":"You must refer any concern or complaint to your GSL or DC as a matter of urgency. DO NOT investigate it yourself."},{"type":"tx","text":"If you are in any doubt about what to do, contact the Scout Information Centre on  0345 300 1818 or safeguarding@scouts.org.uk" },{"type": "tx","text":"You can also contact the NSPCC on 0808 800 5000 or help@nspcc.org.uk"} ],"greencard":[{"type":"mh","text":"Scouting and alcohol"},{"type":"sh","text":"Checklist for adults"},{"type":"bd","text":"Version 2, 2018"},{"type":"bd","text":"This card sets out our policy on alcohol for all adults involved in Scouting."},{"type":"tx","text":"Drinking alcohol can put adults in a compromising position regarding their responsibilities for safeguarding and their duty of care. Also, as an adult in Scouting you are a role model for young people. When adults are responsible for young people, they must not drink alcohol."},{"type":"bd","text":"During Scouting events attended by young people under the age of 18, the following rules apply."},{"type":"bl","text":"Under 18s must not drink alcohol under any circumstances"},{"type":"bl","text":"There must be the correct ratio of adults responsible for young people at all times."},{"type":"bl","text":"If you are responsible for young people you must not drink alcohol."},{"type":"bl","text":"If you are not directly responsible for young people, and you do drink alcohol, you should still follow the Yellow Card (our safeguarding code of practice)."},{"type":"bl","text":"If you are drinking when ‘off duty’, you should consider how alcohol may affect your ability to carry out your Scouting duties when back on duty."},{"type":"bl","text":"Young people must know who is responsible for them at all times. "},{"type":"bd","text":"Support and planning"},{"type":"bl","text":"Carry out a risk assessment, relevant to the size and nature of the event."},{"type":"bl","text":"Consider drawing up a code of conduct before events where alcohol will be present."},{"type":"bl","text":"At longer events, consider how drinking alcohol might affect someone’s ability to carry out their Scouting duties or participation in activities over time. For example, if someone drinks excessively off duty, they may not be fit to carry out their duties or participate in activities the following morning."},{"type":"bl","text":"Brief all young people and adults on the standards of behaviour expected from them"},{"type":"bl","text":"Take care to be clear which adults are responsible for the young people when there is a mix of adults present who may or may not be drinking alcohol. "},{"type":"bl","text":"Consider running alcohol-free events."},{"type":"bl","text":"Consider the cultural and religious observances or needs of those taking part in the event."},{"type":"bl","text":"Members of the Scout Network or a Scout Active Support Unit are expected to follow the same rules as adult leaders. "},{"type":"bl","text":"Help young people and adults understand the issues associated with alcohol and how to find information and advice. "},{"type":"tx","text":"If you would like more information, contact your line manager or the Scout Information Centre."},{"type":"bd","text":"Phone: 0345 300 1818"},{"type":"bd","text": "Email: info.centre@scouts.org.uk"}],"orangecard":[{"type":"mh","text":"Young People First"},{"type":"tx","text":"Issue: August 2015"},{"type":"bx","text":"It is the policy of The Scout Association to safeguard the welfare of all members by protecting them from neglect and from physical, sexual and emotional harm."}],"purplecard":[{"type":"mh","text":"Safe Scouting and what to do in an emergency..."},{"type":"bd","text":"This card is for all adults in Scouting.It contains essential information – keep it with you."},{"type":"sh","text":"Emergency: What do I do?"}],"safetycard":[{"type":"mh","text":"Staying Safe"},{"type":"bd","text":"Safety checklist for leaders"}]}'


cardl = {}
color="y"

do_alcohol() {
 this.cardl = JSON.parse(this.testcards);
   this.cardl = this.cardl['greencard']
  this.color = "g"
}
do_sg() {
  this.cardl = JSON.parse(this.testcards);
   this.cardl = this.cardl['yellowcard']
  this.color = "y"
}
do_yl() {
  this.cardl = JSON.parse(this.testcards);
   this.cardl = this.cardl['orangecard']
  this.color = "o"
}
do_sc() {
  this.cardl = JSON.parse(this.testcards);
   this.cardl = this.cardl['safetycard']
  this.color = "e"
}
do_sf() {
  this.cardl = JSON.parse(this.testcards);
   this.cardl = this.cardl['purplecard']
  this.color = "p"
}
  ngOnInit() {
   this.cardl = JSON.parse(this.testcards);
   this.cardl = this.cardl['yellowcard']
  // console.log(this.cardl)
   this.color = "y"
  }
} 