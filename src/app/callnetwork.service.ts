import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler
} from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Observable, forkJoin, of, from } from "rxjs";
//import { Security } from "./security";
import { map, concatMap, catchError,tap } from "rxjs/operators";
import { Globals } from './globals';
import { Stubs } from './stubs';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  })
};

@Injectable({
  providedIn: "root"
})

export class CallNetworkService {

  constructor(private http: HttpClient, 
              private stubs: Stubs,
              private globals: Globals ) {}
  slowhttp = true;

clear() {
  this.globals.compassdata=[];
  this.globals.compassar = [];
    this.globals.compassuser = []; 
    this.globals.compass_user=""
    this.globals.compass_password==""
  this.globals.last_read = [];
}

clear_role() {
  
}

getReport(r,n): Observable<any> { 
if (this.globals.compass_user=="") { 
  return of(this.stubs.user)
  } else {
    let authURL =this.globals.urlroot +"role/"+r+"/report/"+n;
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
}

getRoleUserAddress(r,u): Observable<any> { 
  if (this.globals.compass_user=="") { 
  return of(this.stubs.user)
  } else {
    let authURL =this.globals.urlroot +"role/"+r+"/useraddress/"+u;
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

getRoleUser(r,u): Observable<any> { 
  if (this.globals.compass_user=="") { 
  return of(this.stubs.user)
  } else {
    let authURL =this.globals.urlroot +"role/"+r+"/user/"+u;
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

  getRoleUsers(r): Observable<any> { 
  if (this.globals.compass_user=="") { 
  return of(this.stubs.user)
  } else {
    let authURL =this.globals.urlroot +"role/"+r+"/users";
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

getUser(): Observable<any> { 
  if (this.globals.compass_user=="") { 
  return of(this.stubs.user)
  } else {
    let authURL =this.globals.urlroot +"user";
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

getHierarchy(r,u): Observable<any> {
  if (this.globals.compass_user=="") {
  return of(this.stubs.allroles)
  } else {
    let authURL =this.globals.urlroot +"role/"+r+"/userhierarchy/"+u;
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

getAllRoles(): Observable<any> {
  if (this.globals.compass_user=="") {
  return of(this.stubs.allroles)
  } else {
    let authURL =this.globals.urlroot +"allroles";
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

getActiveRoles(): Observable<any> {
  if (this.globals.compass_user=="") {
  return of(this.stubs.roles)
  } else {
    let authURL =this.globals.urlroot +"activeroles";
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

getActiveRoles(): Observable<any> {
  if (this.globals.compass_user=="") {
  return of(this.stubs.roles)
  } else {
    let authURL =this.globals.urlroot +"activeroles";
    let body = new HttpParams();
    body = body.set("user", this.globals.compass_user);
    body = body.set("password", this.globals.compass_password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
  }

doLogon(user: string, password: string): Observable<any> {
    let authURL =this.globals.urlroot +"logon";
    let body = new HttpParams();
    body = body.set("user", user);
    body = body.set("password", password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
}