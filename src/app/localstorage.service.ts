import { Injectable } from "@angular/core";
import { Globals } from './globals';

@Injectable({
  providedIn: "root"
})

export class LocalStorageService {

  constructor( private globals: Globals ) {}
}