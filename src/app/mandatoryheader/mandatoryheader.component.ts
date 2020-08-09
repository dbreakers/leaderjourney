import {
  Component,
  Injector,
  ViewChild,
  ModalFactory,
  Params,
  OnInit,
  OnsSplitterSide,
  OnsNavigator,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

import { Input } from '@angular/core';
import { Globals } from '../globals';
import { Role } from '../role';

@Component({
  selector: 'app-mandatoryheader',
  templateUrl: './mandatoryheader.component.html',
  styleUrls: ['./mandatoryheader.component.css']
})
export class MandatoryHeaderComponent implements OnInit {
  //@Input() ;
  fa = "";
  sf = "";
  sg = "";
  gd = "";
  highman = false;  
constructor( private globals: Globals) {}
  
   
  ngOnInit() {

  
  }

}

