import { Component, ViewEncapsulation } from '@angular/core';
import { LogonPageComponent } from './logonpage/logonpage.component';
import { Globals } from './globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  rootPage = LogonPageComponent;
  
constructor(private globals: Globals ) { }
}
