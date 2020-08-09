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

import { Role } from '../role';

@Component({
  selector: 'app-roleheader',
  templateUrl: './roleheader.component.html',
  styleUrls: ['./roleheader.component.css']
})
export class RoleHeaderComponent implements OnInit {
  @Input() role: Role;

  constructor() { }

  ngOnInit() {
  }

}

