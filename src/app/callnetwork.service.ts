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
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  })
};

@Injectable({
  providedIn: "root"
})

export class CallNetworkService {

  constructor(private http: HttpClient, private globals: Globals ) {}
  slowhttp = true;

getRoles(): Observable<any> {
  if (this.globals.compass_user=="") {
  return of("fdfdf")
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