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

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  })
};

@Injectable({
  providedIn: "root"
})

export class CallNetworkService {

  constructor(private http: HttpClient) {}
  slowhttp = true;

doLogon(user: string, password: string): Observable<any> {
    let authURL ="https://2ndnewhawscouts.org.uk/osmr/compassread.php"
    let body = new HttpParams();
    body = body.set("userid", user);
    body = body.set("password", password);
    return this.http
      .post<any>(authURL, body, httpOptions)
      .pipe(catchError(error => of(error)));
  }
}