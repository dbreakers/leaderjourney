import { Injectable } from "@angular/core";
import { Globals } from './globals';

@Injectable({
  providedIn: "root"
})

export class LocalStorageService {

  person_root = "people_bookmarks"
  
  constructor( private globals: Globals ) {}

  add_person(userid,name) {
    var bookmarks = JSON.parse(localStorage.getItem(this.person_root));
    if (bookmarks === null) { bookmarks = new Object;}
    if (!bookmarks.hasOwnProperty(this.globals.roleid)) {
      bookmarks[this.globals.roleid] = new Array;
    } 
    if (!bookmarks[this.globals.roleid].find(a=>a.userid==userid)) {
    bookmarks[this.globals.roleid].push({userid,name})
    localStorage.setItem(this.person_root,JSON.stringify(bookmarks))
    }
  }
  get_people() {
    var bookmarks = JSON.parse(localStorage.getItem(this.person_root));
    if (bookmarks === null) { return []}
    if (bookmarks.hasOwnProperty(this.globals.roleid)) {
      return bookmarks[this.globals.roleid]
    } else {return []}
  }
}