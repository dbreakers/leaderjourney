import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  version: string = '1.0.1';
  compassdata: [];
  roleid: string = "";
  url: string="https://2ndnewhawscouts.org.uk/osmr/compassread2.php";
  urlroot : string="https://us-central1-leaderjourney-a4c0d.cloudfunctions.net/compass/"
  compass_user : string = "";
  compass_password : string = "";
}