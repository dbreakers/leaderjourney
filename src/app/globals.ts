import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  version: string = '1.0.1';
  compassdata: Array = [];
  compassar : Array = [];
  compassuser : Array = [];
  compasshier : Array = [];
  last_directory : Array = [];
  roleid: string = "";
  userid: string = "";
  url: string="https://2ndnewhawscouts.org.uk/osmr/compassread2.php";
 urlroot : string="https://us-central1-leaderjourney-a4c0d.cloudfunctions.net/compass/"
 //urlroot : string="http://localhost:5001/leaderjourney-a4c0d/us-central1/compass/"
  compass_user : string = "";
  compass_password : string = "";
  months : Array = ['January','February','March','April','May','June','July','August','September','October','November','December']
  last_read : Array = [] 
}